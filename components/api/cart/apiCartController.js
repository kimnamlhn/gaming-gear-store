const apiCartService = require('./apiCartService');

// TODO: use session storage instead

exports.addToCart = async (req, res) => {
	try {
		let cart;
		if (req.user) {
			cart = await apiCartService.getCart(req.user.idAccount, req.session.unauthId);
		} else {
			cart = await apiCartService.getCart(null, req.session.unauthId);
		}
		const entity = {
			idCartItems: null,
			idCart: cart.idCart,
			idProduct: req.body.idProduct,
			quantity: req.body.quantity,
		};
		const message = await apiCartService.addToCart(entity);
		res.status(201).json(message);
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};

exports.getCart = async (req, res) => {
	try {
		let cart;
		if (req.user) {
			cart = await apiCartService.getCart(req.user.idAccount, req.session.unauthId);
		} else {
			cart = await apiCartService.getCart(null, req.session.unauthId);
		}
		const cartItems = await apiCartService.getCartItems(cart);
		const obj = { idCart: cart.idCart, cartItems: cartItems };
		req.session.cart = obj;
		res.status(201).json(obj);
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};

exports.delFromCart = async (req, res) => {
	try {
		let cart;
		if (req.user) {
			cart = await apiCartService.getCart(req.user.idAccount, req.session.unauthId);
		} else {
			cart = await apiCartService.getCart(null, req.session.unauthId);
		}
		const entity = {
			idCart: req.session.cart.idCart,
			idProduct: req.body.idProduct,
			quantity: req.body.quantity,
		};
		const message = await apiCartService.delFromCart(entity);
		res.status(200).json(message);
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};
