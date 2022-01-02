const moment = require('moment');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { v4: uuidv4, validate: uuidValidate } = require('uuid');
const { models } = require('../../models');
const validator = require('validator');

exports.createAccount = async (entity) => {
	try {
		const account = await models.account.findOne({ where: { email: entity.email } });
		if (account) {
			return 'Account already exists.';
		}
		if (!validator.isEmail(entity.email)) {
			return 'Please enter a valid email address.';
		}
		if (entity.password.length < 6) {
			return 'Your password must be at least 6 characters long.';
		}
		if (entity.password !== entity.cfm_password) {
			return `The passwords you typed aren't matching.`;
		}
		if (entity.name.length === 0) {
			return 'Please enter your name.';
		}
		if (entity.phone.length === 0) {
			return 'Please enter your phone number.';
		}
		if (entity.address.length === 0) {
			return 'Please enter your address.';
		}
		const token = uuidv4();
		const hashPassword = await bcrypt.hash(entity.password, 10);
		const newAccount = await models.account.build({
			idAccount: null,
			email: entity.email,
			password: hashPassword,
			name: entity.name,
			address: entity.address,
			phone: entity.phone,
			role: entity.role,
			createdAt: moment(),
			updatedAt: moment(),
			locked: 1,
			token: token,
		});
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD,
			},
		});
		const mailOptions = {
			from: process.env.MAIL_USERNAME,
			to: entity.email,
			// to: process.env.MAIL_USERNAME,
			subject: `Link to confirm account`,
			html: `<p>Click this link to confirm your account. <a href="${process.env.ADDRESS}/auth/confirm-account?token=${token}">Click here.</a></p>`,
		};
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				await newAccount.save();
				return 'Account created sucessfully, please check your email address for confirmation link.';
			}
		});
		return 'Account created sucessfully, please check your email address for confirmation link.';
	} catch (err) {
		console.log(err);
	}
};

exports.confirmAccount = async (_token) => {
	if (!uuidValidate(_token)) return null;
	const account = await models.account.findOne({
		where: { token: _token },
	});
	if (account) {
		account.token = null;
		account.locked = 0;
		await account.save();
		return account;
	}
};

exports.forgotPassword = async (user_email) => {
	if (!validator.isEmail(user_email)) return 'Please enter a valid email address.';
	const token = uuidv4();
	const account = await models.account.findOne({
		where: { email: user_email },
	});
	if (account.locked && !account.token) return 'This account is locked.';
	account.token = token;
	account.tokenExpire = moment();
	account.save();

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	});
	const mailOptions = {
		from: process.env.MAIL_USERNAME,
		to: user_email,
		// to: process.env.MAIL_USERNAME,
		subject: `Link to reset password`,
		html: `<p>Click this link to reset your password. <a href="${process.env.ADDRESS}/auth/reset-password?token=${token}">Click here.</a> This link will expires in 15 minutes.</p>`,
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			return 'Check your email inbox for the link to reset your password.';
		}
	});
	// await account.save();
	return 'Check your email inbox for the link to reset your password.';
};

exports.resetPasswordCheck = async (_token) => {
	if (!uuidValidate(_token)) return false; // Check if token is valid
	const account = await models.account.findOne({
		where: { token: _token },
	});
	if (account) {
		// Check if found account with token
		const duration = moment().diff(moment(account.tokenExpire), 'minutes');
		if (duration > 15) return false;
		// Check token expiration
		else return true;
	} else return false;
};

exports.resetPassword = async (entity) => {
	if (!uuidValidate(entity.token)) return { valid: false }; // Check if token is valid
	const account = await models.account.findOne({
		where: { token: entity.token },
	});
	if (account) {
		// Check if found account with token
		const duration = moment().diff(moment(account.tokenExpire), 'minutes');
		if (duration > 15) return { valid: false };
		// Check token expiration
		else {
			if (entity.password.length < 6) {
				return {
					valid: true,
					done: false,
					message: 'Your password must be at least 6 characters long.',
				};
			}
			if (entity.password !== entity.cfm_password) {
				return {
					valid: true,
					done: false,
					message: `The passwords you typed aren't matching.`,
				};
			}
			const hashPassword = await bcrypt.hash(entity.password, 10);
			account.password = hashPassword;
			account.token = null;
			account.tokenExpire = null;
			account.updatedAt = moment();
			await account.save();
			return { valid: true, done: true, message: 'You can now login with your new password' };
		}
	} else return { valid: false };
};
