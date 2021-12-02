const { models } = require('../../models');
const sequelize = require('sequelize');
const moment = require('moment');

const getDetailComments = (id, page = 0) => {
	return models.product_comments.findAndCountAll({
		offset: page * 3,
		limit: 3,
		attributes: [
			'name',
			'content',
			'rating',
			[
				sequelize.fn(
					'date_format',
					sequelize.col('creationAt'),
					'%d %b %Y, %h:%i %p'
				),
				'creationAt',
			],
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
	});
};

const getDetailsCommentsCount = async (id, count) => {
	let result = await models.product_comments.findAll({
		where: {
			idProduct: id,
		},
		attributes: [
			'rating',
			[sequelize.fn('COUNT', sequelize.col('rating')), 'ratingcount'],
		],
		group: ['rating'],
		raw: true,
	});
	let ratingAvg = 0;
	for (let e of result) ratingAvg += e.rating * e.ratingcount;
	ratingAvg /= count;
    if(isNaN(ratingAvg)) ratingAvg = 0;
	return { result, ratingAvg };
};

const addComment = async (entity) => {
    try {
        const comment = models.product_comments.build({
            idComment: null,
            name: entity.name,
            rating: entity.rating,
            content: entity.content,
            creationAt: moment(),
            idAccount: entity.idAccount,
            idProduct: entity.idProduct,
        })
        await comment.save();
    } catch (err) {
        console.log('err:', err);
    }
};

module.exports = {
    getDetailComments,
    getDetailsCommentsCount,
    addComment,
};