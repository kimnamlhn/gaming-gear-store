const productService = require('../products/productService');
const path = require('path');
const formidable = require('formidable');
const fs = require('fs');

const login = async (req, res) => {
	try {
		res.render('account/login', { layout: 'auth', title: 'Login' });
	} catch (error) {
		res.render('error', { error });
	}
};

const register = async (req, res) => {
	try {
		res.render('account/register', { layout: 'auth', title: 'Register' });
	} catch (error) {
		res.render('error', { error });
	}
};

const forgotPassword = async (req, res) => {
	try {
		res.render('account/forgot-password', {
			layout: 'auth',
			title: 'Forgot Password',
		});
	} catch (error) {
		res.render('error', { error });
	}
};

const userIndex = async (req, res) => {
	try {
		res.render('account/user/index', {
			layout: 'user/account',
			title: 'Main',
		});
	} catch (error) {
		res.render('error', { error });
	}
};

const adminIndex = async (req, res) => {
	try {
		res.render('account/admin/index', {
			layout: 'admin/account',
			title: 'Main',
		});
	} catch (error) {
		res.render('error', { error });
	}
};

const list = async (req, res) => {
	try {
		const products = await productService.getAllProductsAdmin();
		res.render('account/admin/productList', {
			layout: 'admin/account',
			title: 'Product List',
			products,
		});
	} catch (error) {
		res.render('error', { error });
	}
};

const addProduct = async (req, res) => {
	try {
		res.render('account/admin/addProduct', {
			layout: 'admin/account',
			title: 'Add a product',
		});
	} catch (error) {
		res.render('error', { error });
	}
};

const deleteProduct = async (req, res) => {
	try {
		const idProduct = req.body.idProduct;
		console.log('id body', idProduct);
		await productService.deleteProduct(idProduct);
		res.redirect(req.headers.referer);
	} catch (error) {
		res.render('error', { error });
	}
};
const addProductPost = async (req, res) => {
	try {
		const entity = {
			idProduct: null,
			name: req.body.product_name,
			category: req.body.product_category,
			brand: req.body.product_brand,
			stock: req.body.product_stock,
			price: req.body.product_price,
			thumbnail: req.body.product_thumbnail,
			images: req.body.product_images,
			generalInfo: req.body.product_generalinfo,
			detailedDescription: req.body.product_detailed_desciption,
		};
		await productService.createProduct(entity);
		res.redirect('/account/admin/products');
	} catch (error) {
		res.render('error', { error });
	}
};

const getEditProductPage = async (req, res) => {
	try {
		const id = Number(req.params.productID);
		const product = await productService.getDetails(id);
		const image = await productService.getDetailImages(id);
		({ count, rows: comments } = await productService.getDetailComments(
			id
		));
		({ result: numRatings, ratingAvg } =
			await productService.getDetailsCommentsCount(id, count));

		console.log('DATA TEST:', id, product, image);

		res.render('account/admin/editProduct', {
			layout: 'admin/account',
			title: 'Edit a product',
			product,
			image,
			count,
			comments,
			numRatings,
			ratingAvg,
		});
	} catch (error) {
		res.render('error', { error });
	}
};

module.exports = {
	login,
	register,
	forgotPassword,
	userIndex,
	adminIndex,
	list,
	addProduct,
	deleteProduct,
	addProductPost,
	getEditProductPage,
};
