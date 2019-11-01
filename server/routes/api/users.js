const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const path = require('path')

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User module
const User = require('../../model/User');
const Group = require('../../model/Group');
const Question = require('../../model/Question');
const QR = require('../../model/QR');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);
	if(!isValid) return res.status(400).json(errors);
	User.findOne({ email: req.body.email })
		.then(user => {
			if(user) {
				errors.email = 'EMAIL ALREADY EXIST';
				return res.status(400).json(errors);
			} else {
				User.findOne({ email: req.body.sID })
					.then(user => {
						if(user) {
							errors.sID = 'SID ALREADY EXIST';
							return res.status(400).json(errors);
						} else {
							const newUser = new User({
								name: req.body.name,
								email: req.body.email,
								password: req.body.password,
								sID: req.body.sID,
								field: req.body.field
							});

							bcrypt.genSalt(10, (err, salt) => {
								bcrypt.hash(newUser.password, salt, (err, hash) => {
									if(err) throw err;
									newUser.password = hash;
									newUser.save()
										.then(user => res.json(user))
										.catch(err => console.log(err));
								});
							});
						}
					});
			}

		})
		.catch(err => console.log(err));
});

// @route   POST api/users/login
// @desc    Login user/ returning jwt
// @access  Public
router.post('/login', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const { errors, isValid } = validateLoginInput(req.body);
	if(!isValid) return res.status(400).json(errors);

	// find user by email
	User.findOne({email})
		.then(user => {
			if(!user) {
				errors.email = "EMAIL DOES NOT EXIST";
				return res.status(404).json(errors);
			} 
			bcrypt.compare(password, user.password)
				.then(isMached => {
					if(isMached) {
						const payload = { id : user.id, name : user.name, email: user.email, groupID: user.groupID };
						// 	Sign token
						jwt.sign(
							payload,
							keys.secretOrkey,
							{ expiresIn: 36000 },
							(err, token) => {
								res.json({ 
									success: true,
									token: 'Bearer ' + token
								});
							});
					} else {
						errors.password = 'WRONG PASS';
						return res.status(400).json(errors);
					}
				});
		});
});

router.get('/current', passport.authenticate('jwt', { session: false }),  (req, res) => {
	res.json({
		id: req.user.id,
		email: req.user.email,
		name: req.user.name,
    sID: req.user.sID,
    field: req.user.field,
    answerdQuestions: req.user.answerdQuestions,
    currentQuestions: req.user.currentQuestions,
    gifts: req.user.gifts,
	});
});

router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
	if(req.user.email !== 'admin@maze.com')
		return res.status(404).send('Unauthorized');
	User.find()
		.then(users => {
		if (!users) {
			errors.noUser = 'There are no profiles';
			return res.status(404).json(errors);
		}
		res.json(users);
		})
		.catch(err => res.status(404).json({ users: 'There are no profiles' }));
});

//startGame
router.get('/startGame', passport.authenticate('jwt', { session: false }), (req, res) => {
	const errors = {}
	console.log(req.user)
	Group.findById(req.user.groupID)
	.then(group => {
		if(!group) {
			errors.group = 'There are no group';
			return res.status(404).json(errors);
		} else {
			if(!group.enable) {
				Question.findOne({questionNumber: 1})
				.then(q => {
					console.log(q._id)
					group.currentQuestion = q._id
					group.enable = true
					group.save()
					return res.status(200).json(group)
				})
				.catch(err => {console.log(err)});
			} else {
				errors.start = 'game has started';
				return res.status(404).json(errors);
			}
		}
	})
	.catch(err => {console.log(err)});
})

router.post('/answerQuestion', passport.authenticate('jwt', { session: false }), (req, res) => {
	const errors = {}
	const { answer } = req.body;
	Group.findById(req.user.groupID)
	.then(group => {
		if(!group) {
			errors.group = 'There are no group';
			return res.status(404).json(errors);
		} else {
			if(group.currentQuestion === null) {
				errors.noQuestion = 'no questions';
				return res.status(400).json(errors)
			} else{
				Question.findById(group.currentQuestion)
				.then(q => {
					if(q.questionAnswer == answer) {
						group.answerdQuestions.push(group.currentQuestion)
						group.currentQuestion = null
						let a = [];
						for(let i=2; i<27; i++) {
							if(group.QRCodes.indexOf(i) === -1) {
								a.push(i)
							}
						}
						console.log(a)
						group.currentQRCode = a[parseInt(Math.random()*a.length)]
						group.hints += 2;
						group.save()
						return res.status(200).json(group)
					} else {
						errors.wrongAnswer = 'wrong answer';
						return res.status(200).json(errors)
					}
				})
			}
		}
	})
})

router.get('/checkQRCode/:QRCodeId', passport.authenticate('jwt', { session: false }), (req, res) => {
	const errors = {}
	Group.findById(req.user.groupID)
	.then( group => {
		if(group.currentQRCode !== null && req.params.QRCodeId == Math.pow(23,group.currentQRCode)%10000007) {
			Question.findOne({questionNumber: (parseInt(group.answerdQuestions.length)+1)})
			.then(q => {
				group.QRCodes.push(group.currentQRCode);
				group.currentQRCode = null;
				group.currentQuestion = q._id;
				group.save()
				return res.status(200)
			})
		} else {
			errors.wrongQRCode = 'Wrong QR code'
			return res.status(400).json(errors)
		}
	})
})

router.get('/getCurrentQRCode', passport.authenticate('jwt', { session: false }), (req, res) => {
	const errors = {}
	Group.findById(req.user.groupID)
	.then(group => {
		res.download(path.resolve('qrcodes', `${group.currentQRCode}.jpg`));
	})
})

router.get('/getDashBoardData', passport.authenticate('jwt', { session: false }), (req, res) => {
	const errors = {}
	if(req.user.groupID === undefined) {
		errors.noGroup = 'no group yet'
		return res.status(400).json(errors)
	}

	Group.findById(req.user.groupID)
		.then(group => {
			User.find({groupID: group._id})
			.then( users => {
				if(group.currentQuestion !== null) {
					Question.findById(group.currentQuestion)
					.then(q => {
						if(q) {
							const currentQuestion = {
								_id: q._id, 
								questionName: q.questionName,
								questionText: q.questionText,
								questionNumber: q.questionNumber
							}
							const data = {
								groupUsers: users,
								group: group,
								question: true,
								currentQuestion: currentQuestion
							}
							return res.status(200).json(data)
						} else {
							const data = {
								groupUsers: users,
								group: group,
								question: false,
							}
							return res.status(200).json(data)
						}
					})
				} else {
					const data = {
						groupUsers: users,
						group: group,
						question: false,
					}
					return res.status(200).json(data)
				}
			})
		})
})

router.post('/getData',  (req, res) => {
	const errors = {}

	Group.findOne({groupName: req.body.groupName})
		.then(group => {
			User.find({groupID: group._id})
			.then( users => {
				if(group.currentQuestion !== null) {
					Question.findById(group.currentQuestion)
					.then(q => {
						if(q) {
							const currentQuestion = {
								_id: q._id, 
								questionName: q.questionName,
								questionText: q.questionText,
								questionNumber: q.questionNumber
							}
							const data = {
								groupUsers: users,
								group: group,
								question: true,
								currentQuestion: currentQuestion
							}
							return res.status(200).json(data)
						} else {
							const data = {
								groupUsers: users,
								group: group,
								question: false,
							}
							return res.status(200).json(data)
						}
					})
				} else {
					const data = {
						groupUsers: users,
						group: group,
						question: false,
					}
					return res.status(200).json(data)
				}
			})
		})
})

router.post('/getQuestionsali', (req, res) => {
	Question.find()
	.then(qs => {
		return res.status(200).json(qs)
	})
})

router.post('/getQRali', (req, res) => {
	QR.find()
	.then(qs => {
		return res.status(200).json(qs)
	})
})

module.exports = router;