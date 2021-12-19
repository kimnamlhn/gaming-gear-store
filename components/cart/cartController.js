const productService = require('./productService');

exports.list = async (req, res) => {
	try {
		res.render('account/cart', {
			title: 'Electro - Cart List',
		});
	} catch (error) {
		res.render('error', { error });
	}
};

