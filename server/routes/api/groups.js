const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User module
// const Gift = require('../../model/User');
const Group = require('../../model/Group');
// const Question = require('../../model/User');
const User = require('../../model/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Groups Works' }));

// @route   POST api/users/createGroup
// @desc    createGroup user
// @access  Public
router.post('/createGroup', (req, res) => {
	let errors = {};
	Group.findOne({ groupName: req.body.groupName })
		.then(user => {
			if(user) {
				errors.name= 'this Name already exist';
				return res.status(400).json(errors);
			} else {
        const newGroup = new Group({
          groupName: req.body.groupName,
        });
        newGroup.save()
          .then(group => res.json(group))
					.catch(err => console.log(err));
			}
		})
		.catch(err => console.log(err));
});

// @route   POST api/users/groupLogin
// @desc    groupLogin user/ returning jwt
// @access  Public
router.post('/addUserToGroup', (req, res) => {
	const errors = {}
	const { groupName, userEmail } = req.body;
	Group.findOne({ groupName: groupName })
	.then(group => {
		if(!group) {
			errors.group = 'group does not exist';
			return res.status(400).json(errors);
		} else {
			User.findOne({ email: userEmail })
			.then(user => {
				if(!user) {
					errors.user = 'user does not exist';
					return res.status(400).json(errors);
				} else {
					console.log(group._id)
					user.groupID = group._id;
					user.save()
					return res.status(200).json(user)
				}

			})
		}
	}

	)
});

router.post('/addHint', (req, res) => {
	const errors = {}
	const { groupName, value } = req.body
	Group.findOne({groupName})
	.then(group => {
		if(!group) {
			errors.group = 'group does not exist';
			return res.status(400).json(errors);
		} else {
			group.hints += parseInt(value);
			group.save()
			return res.status(200).send(group);
		}
	})
});

router.post('/redHint', (req, res) => {
	const errors = {}
	const { groupName, value } = req.body
	Group.findOne({groupName})
	.then(group => {
		if(!group) {
			errors.group = 'group does not exist';
			return res.status(400).json(errors);
		} else {
			if(group.hints > value) 
				group.hints -= parseInt(value);
			group.save()
			return res.status(200).send(group);
		}
	})
});

router.post('/reduceHint', (req, res) => {
	const errors = {}
	const { groupName } = req.body
	Group.findOne({groupName})
	.then(group => {
		if(!group) {
			errors.group = 'group does not exist';
			return res.status(400).json(errors);
		} else if(group.hints > group.usedHints) {
			group.hints -= (group.usedHints+1);
			group.usedHints +=1;
			group.save()
			return res.status(200).send(group);
		}
		else {
			errors.group = 'not enough hints';
			return res.status(400).json(errors);
		}
	})
});

module.exports = router;