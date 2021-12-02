const { models } = require('../../models');
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
			const account = await models.account.findOne({
				where: { email: username },
			});
			try {
				if (!account) {
					return done(null, false, {
						message: 'Incorrect username.',
					});
				}
				if (account.locked) {
					return done(null, false, {message: 'This account is locked.'})
				}
				if (!bcrypt.compareSync(password,account.password)) {
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
