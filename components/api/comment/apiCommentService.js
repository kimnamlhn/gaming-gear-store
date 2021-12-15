const { models } = require('../../../models');
const sequelize = require('sequelize');
const moment = require('moment');

exports.getComments = (id, page = 0, itemsPerPage) => {
	return models.product_comments.findAndCountAll({
		offset: page * itemsPerPage,
		limit: itemsPerPage,
		attributes: [
			'name',
			'content',
			'rating',
			[sequelize.fn('date_format', sequelize.col('creationAt'), '%d %b %Y'), 'creationAt'],
		],
		include: [
			{
				model: models.account,
				attributes: ['name'],
				as: 'idAccount_account',
			},
		],
		where: {
			idProduct: id,
		},
		raw: true,
		order: [['creationAt', 'DESC']],
	});
};

exports.getCommentsCount = async (id, count) => {
	let countPerRating = await models.product_comments.findAll({
		where: {
			idProduct: id,
		},
		attributes: ['rating', [sequelize.fn('COUNT', sequelize.col('rating')), 'ratingcount']],
		group: ['rating'],
		raw: true,
	});
	let ratingAvg = 0;
	for (let e of countPerRating) ratingAvg += e.rating * e.ratingcount;
	ratingAvg /= count;
	if (isNaN(ratingAvg)) ratingAvg = 0;
	ratingAvg = +ratingAvg.toFixed(2);
	return { countPerRating, ratingAvg };
};

exports.addComment = async (entity) => {
	try {
		const comment = models.product_comments.build({
			idComment: null,
			name: entity.name,
			rating: entity.rating,
			content: entity.content,
			creationAt: moment(),
			idAccount: entity.idAccount,
			idProduct: entity.idProduct,
		});
		await comment.save();
		return comment;
	} catch (err) {
		console.log('err:', err);
	}
};
