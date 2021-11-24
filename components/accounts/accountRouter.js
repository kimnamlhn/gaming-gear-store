const express = require('express');
const passport = require('../../auth/passport');
const router = express.Router();

const accountController = require('./accountController');

/* GET home page. */
router.post('/login', accountController.login
    // passport.authenticate('local', {
    //     successRedirect: '/',
    //     failureRedirect: '/login' 
);

router.get('/register', accountController.register);

module.exports = router;