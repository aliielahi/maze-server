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
const QR = require('../../model/QR');


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'qrs Works' }));

router.post('/createQRCode', (req, res) => {
	let errors = {};
	QR.findOne({ qrNumber: req.body.qrNumber })
		.then(qr => {
			if(qr || req.body.qrNumber > 30 || req.body.qrNumber < 0 ) {
				errors.name= 'this Name already exist';
				return res.status(400).json(errors);
			} else {
        const newQR = new QR({
          QRText: req.body.QRText,
          pictureId: req.body.pictureId,
          qrNumber: req.body.qrNumber
        });
        newQR.save()
          .then(qr => res.json(qr))
          .catch(err => console.log(err));
			}
		})
		.catch(err => console.log(err));
});

module.exports = router;