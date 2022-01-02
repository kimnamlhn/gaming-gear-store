const authService = require('./authService');

exports.login = async (req, res) => {
	try {
		if (!req.user)
			res.render('account/login', {
				layout: 'auth',
				title: 'Login',
				error: req.flash('error'),
			});
		else res.redirect('/');
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.register = async (req, res) => {
	try {
		if (req.user) res.redirect('/');
		else
			res.render('account/register', {
				layout: 'auth',
				title: 'Register',
			});
	} catch (error) {
		res.render('error', { error });
	}
};

exports.createAccount = async (req, res) => {
	try {
		const entity = {
			email: req.body.user_email,
			password: req.body.user_password,
			cfm_password: req.body.user_cfm_password,
			name: req.body.user_name,
			phone: req.body.user_phone,
			address: req.body.user_address,
			role: 0,
		};
		const error = await authService.createAccount(entity);
		res.render('account/register', {
			layout: 'auth',
			title: 'Register',
			email: req.body.user_email,
			name: req.body.user_name,
			phone: req.body.user_phone,
			address: req.body.user_address,
			error,
		});
	} catch (err) {
		res.render('error', { err });
	}
};

exports.confirmAccount = async (req, res) => {
	try {
		if (req.user) res.redirect('/');
		const user = await authService.confirmAccount(req.query.token);
		if (user)
			req.login(user, function (err) {
				if (!err) {
					res.redirect('/');
				} else console.log(err);
			});
		res.send('Token invalid');
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.forgotPassword = async (req, res) => {
	try {
		if (req.user) res.redirect('/');
		res.render('account/forgot-password', {
			layout: 'auth',
			title: 'Forgot Password',
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.forgotPasswordPost = async (req, res) => {
	try {
		const message = await authService.forgotPassword(req.body.user_email);
		res.render('account/forgot-password', {
			layout: 'auth',
			title: 'Forgot Password',
			message,
		});
	} catch (error) {
		res.render('error', { error });
	}
};

exports.resetPassword = async (req, res) => {
	try {
		if (req.user) res.redirect('/');
		const valid = await authService.resetPasswordCheck(req.query.token);
		res.render('account/reset-password', {
			layout: 'auth',
			title: 'Reset Password',
			valid,
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.resetPasswordPost = async (req, res) => {
	try {
		const entity = {
			token: req.query.token,
			password: req.body.user_password,
			cfm_password: req.body.user_cfm_password,
		};
		const { valid, done, message } = await authService.resetPassword(entity);
		res.render('account/reset-password', {
			layout: 'auth',
			title: 'Reset Password',
			valid,
			done,
			message,
		});
	} catch (error) {
		res.render('error', { error });
	}
};
