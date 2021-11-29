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
		if (req.body.product_name != null && req.body.product_brand != null) {
			//can check lai dieu kien validation
			// Formidable Setup
			const form = new formidable.IncomingForm();
			const uploadFolder = path.join(__dirname, '../../public/store/img');
			// Formidable config
			form.multiple = true;
			form.uploadDir = uploadFolder;
			form.maxFileSize = 50 * 1024 * 1024; // 5MB
			console.log(form);
			form.parse(req, async (err, fields, files) => {
				// if (err) {
				// 	console.log('Error parsing the files.');
				// 	return res.status(400).json({
				// 		status: 'Fail',
				// 		message: 'There was an error parsing the files.',
				// 		error: err,
				// 	});
				// }
				// if (!files.product_thumbnail.length) {
				// 	const file = files.product_thumbnail;
				// 	const fileName = encodeURIComponent(
				// 		file.name.replace(/\s/g, '-')
				// 	);
				// 	try {
				// 		fs.renameSync(file.path, join(uploadFolder, fileName));
				// 	} catch (error) {
				// 		console.log(error);
				// 	}
				// }
				// try {
				// 	const newFile = await File.create({
				// 		name: `img/${fileName}`,
				// 	});
				// } catch (error) {
				// 	res.json({ error });
				// }
			});

			//const form = formidable({ multiple: true });
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
				desciption: req.body.product_desciption,
			};
			// form.parse(req, (err, fields, files) => {
			// 	if (err) {
			// 		next(err);
			// 		return;
			// 	}
			// 	res.json({ fields, files });
			// });
			await productService.createProduct(entity);
		}
		res.redirect(req.headers.referer);
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
};
