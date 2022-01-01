const { models } = require('../../../models');
const sequelize = require('sequelize');

exports.getUserList = async (page, limit) => {

	const { count, rows } = await models.account.findAndCountAll({
		limit: limit,
		offset: page * limit,
		where: { role: 0 },
		raw: true,
	});

	return { count, rows };
};
