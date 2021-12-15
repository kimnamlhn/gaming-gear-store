const { models } = require('../../../models');
const sequelize = require('sequelize');

exports.getProducts = async (filter) => {
	let where = {};
	let having = {};
    if (isNaN(filter.page)) {
        filter.page = 0;
    }
	if (isNaN(filter.limit)) {
        filter.limit = 12;
    }
	if (!isNaN(filter.category)) {
		where.category = filter.category;
	}
	if(filter.brand)
    	if(filter.brand !== 'undefined' && filter.brand.length > 0) {
        where.brand = filter.brand;
    	}
    if (!isNaN(filter.rating)) {
		having = sequelize.where(sequelize.fn('AVG', sequelize.col('product_comments.rating')),{[sequelize.Op.gte]: filter.rating})
    }   
	if(!isNaN(filter.priceMin)&&isNaN(filter.priceMax)) {
		where.price = {[sequelize.Op.gte]:filter.priceMin}
	}
	if(!isNaN(filter.priceMax)&&isNaN(filter.priceMin)) {
		where.price = {[sequelize.Op.lte]:filter.priceMax}
	}
	if(!isNaN(filter.priceMin)&&!isNaN(filter.priceMax)) {
		where.price = {[sequelize.Op.between]: [filter.priceMin,filter.priceMax]}
	}
    let {count,rows} = await models.product.findAndCountAll({
		limit: filter.limit,
		offset: filter.page * filter.limit,
		raw: true,
		where,
		attributes: ['idProduct', 'name', 'brand', 'price', 'thumbnail',[sequelize.fn('AVG', sequelize.col('product_comments.rating')), 'test']],
		include: [
			{
				model: models.category,
				attributes: ['nameCategory'],
				as: 'category_category',
			},
			{
				model: models.product_comments,
				attributes: [
					[sequelize.fn('AVG', sequelize.col('rating')), 'AvgRating'],
				],
				as: 'product_comments',
			},
		],
		distinct: true,
		group: ['idProduct'],
		subQuery: false,
		having,
	});
    let sum = 0;
    count.forEach(e => {
        sum+=e.count;
    })
    count = sum;
    rows = rows.map(({
        'product_comments.AvgRating': avgRating,
        'category_category.nameCategory': nameCategory, ...rest}) => ({
        avgRating, 
        nameCategory,...rest
    }));
    return {count, rows};
};