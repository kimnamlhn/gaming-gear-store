const apiOrderService = require('./apiOrderService');

exports.getOrderList = async (req, res) => {};

exports.getOrderListAdmin = async (req, res) => {
	try {
		if (!req.user || !req.user.role) return;
		let page = parseInt(req.query.page);
		let limit = 5;
		const orders = await apiOrderService.getOrderListAdmin(page, limit);
		orders.limit = limit;
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};

exports.getOrderDetailAdmin = async (req, res) => {
	try {
		if (!req.user || !req.user.role) return;
		const idOrder = req.params.orderID;
		const detail = await apiOrderService.getOrderDetailAdmin(idOrder);
		res.status(200).json(detail);
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};

exports.orderAction = async (req, res) => {
	try {
		if (!req.user || !req.user.role) return;
		const idOrder = req.params.orderID;
		const action = parseInt(req.query.action);
		await apiOrderService.orderAction(idOrder, action);
		res.redirect('/account/admin/orders');
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};
