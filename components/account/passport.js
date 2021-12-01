const { models } = require('../../models');
const passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async function (username, password, done) {
			const account = await models.account.findOne({
				where: { email: username },
				//raw: true,
			});
			try {
				if (!account) {
					return done(null, false, {
						message: 'Incorrect username.',
					});
				}
				if (!validPassword(account, password)) {
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
