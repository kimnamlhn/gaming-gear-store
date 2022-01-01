const express = require('express');
const passport = require('../middlewares/passport');
const router = express.Router();
const authController = require('./authController');

// Login
router.get('/login', authController.login);
router.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/auth/login',
		badRequestMessage: 'Please fill all the missing fields.',
		failureFlash: true,
	})
);
//Register
router.get('/register', authController.register);
router.post('/register', authController.createAccount);
router.get('/confirm-account', authController.confirmAccount);
// Password
router.get('/forgot-password', authController.forgotPassword);
router.post('/forgot-password', authController.forgotPasswordPost);
router.get('/reset-password', authController.resetPassword);
router.post('/reset-password', authController.resetPasswordPost);
// Logout
router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

module.exports = router;
