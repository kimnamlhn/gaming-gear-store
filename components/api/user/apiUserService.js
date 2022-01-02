const { models } = require('../../../models');
const sequelize = require('sequelize');

exports.getUserList = async (page, limit) => {
	if (!page) page = 0;
	const { count, rows } = await models.account.findAndCountAll({
		limit: limit,
		offset: page * limit,
		where: { role: 0 },
		attributes: {
			exclude: ['password', 'token', 'tokenExpire'],
		},
		raw: true,
	});

	return { count, rows };
};
