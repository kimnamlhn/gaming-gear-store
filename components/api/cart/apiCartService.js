const { models } = require('../../../models');
const sequelize = require('sequelize');
const moment = require('moment');

exports.getCart = async (idAccount, idSession) => {
	try {
		// Check if account already have cart
		if (idAccount) {
			const cart = await models.cart.findOne({ where: { idAccount: idAccount } });
			// If account doesn't have a cart, create a new one
			if (!cart) {
				const sCart = await models.cart.findOne({ where: { idSession: idSession } });
				if (!sCart) {
					const newCart = models.cart.build({
						idCart: null,
						idAccount: idAccount,
						idSession: idSession,
						createdAt: moment(),
						updatedAt: moment(),
					});
					await newCart.save();
					return newCart;
				} else {
					if (sCart.idAccount === null) {
						sCart.idAccount = idAccount;
						await sCart.save();
						return sCart;
					} else {
						const newCart = models.cart.build({
							idCart: null,
							idAccount: idAccount,
							idSession: idSession,
							createdAt: moment(),
							updatedAt: moment(),
						});
						await newCart.save();
						return newCart;
					}
				}
			}
			if (!cart.idAccount) {
				cart.idAccount = idAccount;
				await cart.save();
			}
			// if (cart.idSession) {
			// 	cart.idSession = null;
			// 	await cart.save();
			// }
			return cart;
		} else {
			// If user is guest
			const cart = await models.cart.findOne({ where: { idSession: idSession } });
			if (!cart) {
				const newCart = models.cart.build({
					idCart: null,
					idAccount: null,
					idSession: idSession,
					createdAt: moment(),
					updatedAt: moment(),
				});
				await newCart.save();
				return newCart;
			}
			return cart;
		}
	} catch (error) {
		console.log(error);
	}
};

exports.addToCart = async (entity) => {
	try {
		const cartItem = await models.cart_items.findOne({
			where: { idCart: entity.idCart, idProduct: entity.idProduct },
		});
		if (!cartItem) {
			const product = await models.product.findOne({
				where: { idProduct: entity.idProduct },
			});
			if (!product) return 'Invalid Product';
			const newCartItem = models.cart_items.build({
				idCartItems: entity.idCartItems,
				idCart: entity.idCart,
				idProduct: entity.idProduct,
				quantity: entity.quantity,
				createdAt: moment(),
				updatedAt: moment(),
			});
			await newCartItem.save();
			return 'Created new cart item.';
		} else {
			cartItem.increment('quantity', { by: entity.quantity });
			cartItem.updatedAt = moment();
			await cartItem.save();
			return 'Updated cart item.';
		}
	} catch (error) {
		console.log(error);
	}
};

exports.delFromCart = async (entity) => {
	try {
		const cartItem = await models.cart_items.findOne({
			where: { idCart: entity.idCart, idProduct: entity.idProduct },
		});
		if (cartItem) {
			if (cartItem.quantity - entity.quantity <= 0) {
				await cartItem.destroy();
				return 'Deleted item instance.';
			} else {
				cartItem.decrement('quantity', { by: entity.quantity });
				await cartItem.save();
				return 'Delete some item.';
			}
		} else return 'Nothing to delete.';
	} catch (error) {
		console.log(error);
	}
};

exports.getCartItems = (entity) => {
	return models.cart_items.findAndCountAll({
		where: { idCart: entity.idCart },
		attributes: { exclude: ['idCart', 'idCartItems'] },
		include: [
			{
				model: models.product,
				attributes: ['name', 'price', 'thumbnail'],
				as: 'idProduct_product',
			},
		],
		raw: true,
	});
};
