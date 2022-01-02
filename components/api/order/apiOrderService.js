const { models } = require('../../../models');
const sequelize = require('sequelize');

exports.getOrderList = async (page, limit) => {};

exports.getOrderListAdmin = async (page, limit) => {
	if (!page) page = 0;
	let { count, rows } = await models.orders.findAndCountAll({
		limit: limit,
		offset: page * limit,
		raw: true,
		include: [
			{
				model: models.account,
				attributes: ['name'],
				as: 'idAccount_account',
			},
		],
	});
	rows = rows.map(({ 'idAccount_account.name': customerName, ...rest }) => ({
		customerName,
		...rest,
	}));
	return { count, rows };
};

exports.getOrderDetailAdmin = async (id) => {
	let detail = await models.order_detail.findAll({
		where: { idOrder: id },
		raw: true,
		include: [
			{ model: models.product, attributes: ['name', 'price'], as: 'idProduct_product' },
		],
	});
	detail = detail.map(
		({
			'idProduct_product.name': productName,
			'idProduct_product.price': productPrice,
			...rest
		}) => ({
			productName,
			productPrice,
			...rest,
		})
	);
	return detail;
};

exports.orderAction = async (id, action) => {
	const order = await models.orders.findOne({ where: { idOrder: id } });
	let str;
	switch (action) {
		case 1:
			str = 'Đã giao hàng';
			break;
		case 2:
			str = 'Đang giao hàng';
			break;
		case 3:
			str = 'Chưa giao hàng';
			break;
		case 4:
			str = 'Đã hủy';
			break;
		default:
			break;
	}
	order.status = str;
	await order.save();
};
