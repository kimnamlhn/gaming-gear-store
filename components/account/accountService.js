const moment = require('moment');
const sequelize = require('sequelize');
const validator = require('validator');
const { models } = require('../../models');

exports.listAccounts = async (type) => {
	const { count, rows } = await models.account.findAndCountAll({
		where: { role: type },
		raw: true,
	});
	return { count, rows };
};

exports.getProfile = (id) => {
	return models.account.findOne({
		where: {
			idAccount: id,
		},
		attributes: {
			exclude: ['password', 'role', 'locked', 'token', 'tokenExpire'],
		},
		raw: true,
	});
};

exports.updateProfileInfo = async (entity) => {
	try {
		const others = await models.account.findOne({
			where: {
				[sequelize.Op.and]: [
					{ idAccount: { [sequelize.Op.not]: entity.idAccount } },
					{ email: entity.email },
				],
			},
		});
		if (others) return 'This email is already in use by another account.';
		if (!validator.isEmail(entity.email)) return 'Please enter a valid email address.';
		if (entity.name.length === 0) return 'Please enter your name.';
		if (entity.phone.length === 0) return 'Please enter your phone number.';
		if (entity.address.length === 0) return 'Please enter your address.';

		let account = await models.account.findOne({
			where: { idAccount: entity.idAccount },
		});
		if (
			account.email === entity.email &&
			account.name === entity.name &&
			account.phone == entity.phone &&
			account.address === entity.address
		)
			return '';
		account.set({
			email: entity.email,
			name: entity.name,
			phone: entity.phone,
			address: entity.address,
			updatedAt: moment(),
		});

		await account.save();
		return 'Account info changed.';
	} catch (e) {
		console.log('err:', e);
	}
};


exports.lockUser = async (idAccount) => {
	try {
		let account = await models.account.findOne({
			where: { idAccount: idAccount },
		});

		console.log("id account", account);

		if (account.locked) return 'This user is already locked';

		account.set({
			locked: 1
		});

		await account.save();
		return 'Locked successfully.';
	} catch (e) {
		console.log('err:', e);
	}
};