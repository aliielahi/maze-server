const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
// Load User module
// const Gift = require('../../model/User');
const Group = require('../../model/Group');
// const Question = require('../../model/User');
const User = require('../../model/User');
const Question = require('../../model/Question');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'questions Works' }));

router.post('/createQuestion', (req, res) => {
	let errors = {};
	Question.findOne({ questionName: req.body.questionName })
		.then(user => {
			if(user) {
				errors.name= 'this Name already exist';
				return res.status(400).json(errors);
			} else {
        const newQuestion = new Question({
          questionName: req.body.questionName,
          questionText: req.body.questionText,
          questionAnswer: req.body.questionAnswer,
          questionNumber: req.body.questionNumber
        });
        newQuestion.save()
          .then(group => res.json(group))
          .catch(err => console.log(err));
			}
		})
		.catch(err => console.log(err));
});

module.exports = router;