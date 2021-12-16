const { models } = require('../../../models');
const sequelize = require('sequelize');

exports.getProducts = async (filter, _order, search) => {
	let where = {};
	let having = {};
	let order = [];
	if (search && search !== 'undefined' && search.length > 0) {
		where.search = {
			[sequelize.Op.or]: [
				sequelize.where(
					sequelize.fn('LOWER', sequelize.col('product.name')),
					'LIKE',
					'%' + search + '%'
				),
				sequelize.where(
					sequelize.fn('LOWER', sequelize.col('category_category.nameCategory')),
					'LIKE',
					'%' + search + '%'
				),
			],
		};
	}
	if (isNaN(filter.page)) {
		filter.page = 0;
	}
	if (isNaN(filter.limit)) {
		filter.limit = 12;
	}
	if (!isNaN(filter.category)) {
		where.category = filter.category;
	}
	if (filter.brand)
		if (filter.brand !== 'undefined' && filter.brand.length > 0) {
			where.brand = filter.brand;
		}
	if (!isNaN(filter.rating)) {
		having = sequelize.where(sequelize.fn('AVG', sequelize.col('product_comments.rating')), {
			[sequelize.Op.gte]: filter.rating,
		});
	}
	if (!isNaN(filter.priceMin) && isNaN(filter.priceMax)) {
		where.price = { [sequelize.Op.gte]: filter.priceMin };
	}
	if (!isNaN(filter.priceMax) && isNaN(filter.priceMin)) {
		where.price = { [sequelize.Op.lte]: filter.priceMax };
	}
	if (!isNaN(filter.priceMin) && !isNaN(filter.priceMax)) {
		where.price = { [sequelize.Op.between]: [filter.priceMin, filter.priceMax] };
	}
	if (_order === 1) order.push(sequelize.literal('max(price) DESC'));
	if (_order === 2) order.push(sequelize.literal('min(price) ASC'));
	if (_order === 3) order.push(sequelize.literal('`product_comments.AvgRating` DESC'));
	if (_order === 4) order.push(sequelize.literal('`product_comments.AvgRating` ASC'));
	if (_order === 5) order.push(sequelize.literal('max(creationDate) DESC'));
	if (_order === 6) order.push(sequelize.literal('min(creationDate) ASC'));
	let { count, rows } = await models.product.findAndCountAll({
		limit: filter.limit,
		offset: filter.page * filter.limit,
		raw: true,
		where,
		order,
		attributes: ['idProduct', 'name', 'brand', 'price', 'thumbnail'],
		include: [
			{
				model: models.category,
				attributes: ['nameCategory'],
				as: 'category_category',
			},
			{
				model: models.product_comments,
				attributes: [[sequelize.fn('AVG', sequelize.col('rating')), 'AvgRating']],
				as: 'product_comments',
			},
		],
		distinct: true,
		group: ['idProduct'],
		subQuery: false,
		having,
	});
	let sum = 0;
	count.forEach((e) => {
		sum += e.count;
	});
	count = sum;
	rows = rows.map(
		({
			'product_comments.AvgRating': avgRating,
			'category_category.nameCategory': nameCategory,
			...rest
		}) => ({
			avgRating,
			nameCategory,
			...rest,
		})
	);
	return { count, rows };
};
