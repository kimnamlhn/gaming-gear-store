const productService = require('../products/productService');
const accountService = require('./accountService');

exports.login = async (req, res) => {
	try {
		if (!req.user)
			res.render('account/login', {
				layout: 'auth',
				title: 'Login',
				error: req.flash('error'),
			});
		else res.redirect('/');
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.register = async (req, res) => {
	try {
		if (req.user) res.redirect('/');
		else
			res.render('account/register', {
				layout: 'auth',
				title: 'Register',
			});
	} catch (error) {
		res.render('error', { error });
	}
};

exports.createAccount = async (req, res) => {
	try {
		const entity = {
			email: req.body.user_email,
			password: req.body.user_password,
			cfm_password: req.body.user_cfm_password,
			name: req.body.user_name,
			phone: req.body.user_phone,
			address: req.body.user_address,
			role: 0,
		};
		const { error, user } = await accountService.createAccount(entity);
		if (user)
			req.login(user, function (err) {
				if (!err) {
					res.redirect('/');
				} else console.log(err);
			});
		res.render('account/register', {
			layout: 'auth',
			title: 'Register',
			email: req.body.user_email,
			name: req.body.user_name,
			phone: req.body.user_phone,
			address: req.body.user_address,
			error,
		});
	} catch (err) {
		res.render('error', { err });
	}
};

exports.forgotPassword = async (req, res) => {
	try {
		if (req.user) res.redirect('/');
		res.render('account/forgot-password', {
			layout: 'auth',
			title: 'Forgot Password',
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.forgotPasswordPost = async (req, res) => {
	try {
		const message = await accountService.forgotPassword(req.body.user_email);
		res.render('account/forgot-password', {
			layout: 'auth',
			title: 'Forgot Password',
			message,
		});
	} catch (error) {
		res.render('error', { error });
	}
};

exports.resetPassword = async (req, res) => {
	try {
		if (req.user) res.redirect('/');
		const valid = await accountService.resetPasswordCheck(req.query.token);
		res.render('account/reset-password', {
			layout: 'auth',
			title: 'Reset Password',
			valid,
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.resetPasswordPost = async (req, res) => {
	try {
		const entity = {
			token: req.query.token,
			password: req.body.user_password,
			cfm_password: req.body.user_cfm_password,
		};
		const { valid, done, message } = await accountService.resetPassword(entity);
		res.render('account/reset-password', {
			layout: 'auth',
			title: 'Reset Password',
			valid,
			done,
			message,
		});
	} catch (error) {
		res.render('error', { error });
	}
};

exports.userIndex = async (req, res) => {
	try {
		if (!req.user) res.redirect('/');
		const profile = await accountService.getProfile(req.user.idAccount);
		res.render('account/profile', {
			layout: 'account',
			title: 'Main',
			profile,
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.adminIndex = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		const profile = await accountService.getProfile(req.user.idAccount);
		res.render('account/profile', {
			layout: 'account',
			title: 'Main',
			profile,
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.accountListAdmin = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		let { count, rows: accounts } = await accountService.listAccounts(1);
		res.render('account/admin/accountList', {
			layout: 'account',
			title: 'Admin Account List',
			list: 'admin',
			accounts,
		});
	} catch (error) {
		res.render('error', { error });
	}
};

exports.addAdminAccount = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		res.render('account/admin/addAccount', {
			layout: 'account',
			title: 'Add an Admin Account',
		});
	} catch (error) {
		res.render('error', { error });
	}
};

exports.addAdminAccountPost = async (req, res) => {
	try {
		const entity = {
			email: req.body.user_email,
			password: req.body.user_password,
			cfm_password: req.body.user_cfm_password,
			name: req.body.user_name,
			phone: req.body.user_phone,
			address: req.body.user_address,
			role: 1,
		};
		const { error, user } = await accountService.createAccount(entity);
		if (user) res.redirect('/account/admin/admin-acc');
		res.render('account/admin/addAccount', {
			layout: 'account',
			title: 'Add an Admin Account',
			email: req.body.user_email,
			name: req.body.user_name,
			phone: req.body.user_phone,
			address: req.body.user_address,
			error,
		});
	} catch (err) {
		res.render('error', { err });
	}
};

exports.accountListUser = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		let { count, rows: accounts } = await accountService.listAccounts(0);
		res.render('account/admin/accountList', {
			layout: 'account',
			title: 'User Account List',
			list: 'user',
			accounts,
		});
	} catch (error) {
		res.render('error', { error });
	}
};

exports.list = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		const products = await productService.getAllProductsAdmin();
		res.render('account/admin/productList', {
			layout: 'account',
			title: 'Product List',
			products,
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.addProduct = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		res.render('account/admin/addProduct', {
			layout: 'account',
			title: 'Add a product',
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.deleteProduct = async (req, res) => {
	try {
		const idProduct = req.body.idProduct;
		await productService.deleteProductComment(idProduct);
		await productService.deleteProductImage(idProduct);
		await productService.deleteProduct(idProduct);
		res.redirect(req.headers.referer);
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.uploadImagePost = async (req, res) => {
	const id = req.params.productID;
	await productService.uploadImage(req, id);
	res.redirect('/account/admin/products');
};

exports.addProductPost = async (req, res) => {
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
		const id = await productService.createProduct(entity);
		res.redirect(`/account/admin/products/add/${id}`);
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.editProductPost = async (req, res) => {
	try {
		const idProduct = Number(req.params.productID);
		const entity = {
			idProduct: idProduct,
			name: req.body.product_name,
			category: req.body.product_category,
			brand: req.body.product_brand,
			stock: req.body.product_stock,
			price: req.body.product_price,
			// thumbnail: req.body.product_thumbnail,
			// images: req.body.product_images,
			generalInfo: req.body.product_generalinfo,
			desciption: req.body.product_desciption,
		};
		await productService.updateProduct(entity);
		res.redirect(req.headers.referer);
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.getEditProductPage = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		const id = Number(req.params.productID);
		const product = await productService.getDetails(id);
		const image = await productService.getDetailImages(id);

		res.render('account/admin/editProduct', {
			layout: 'account',
			title: 'Edit a product',
			product,
			image,
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};
