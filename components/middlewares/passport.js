const { models } = require('../../models');
const validator = require('validator');
const bcrypt = require('bcrypt');
const passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

passport.use(
	new LocalStrategy(
		{
			usernameField: 'user_email',
			passwordField: 'user_password',
		},
		async function (username, password, done) {
			if (!validator.isEmail(username))
				return done(null, false, { message: 'Please enter a valid email address.' });
			const account = await models.account.findOne({
				where: { email: username },
			});
			try {
				if (!account) {
					return done(null, false, {
						message: `This email address doesn't exist. Would you like to <a href="/account/register">create a new account?</a>`,
					});
				}
				if (account.locked) {
					return done(null, false, { message: 'This account is locked.' });
				}
				if (!bcrypt.compareSync(password, account.password)) {
					return done(null, false, {
						message: 'Incorrect password.',
					});
				}
				return done(null, account);
			} catch (err) {
				return done(err);
			}
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, { idAccount: user.idAccount, name: user.name, role: user.role });
});

passport.deserializeUser(function (user, done) {
	return done(null, user);
});

function validPassword(user, password) {
	return user.password === password;
}

module.exports = passport;
