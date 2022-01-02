const productService = require('../products/productService');
const accountService = require('./accountService');

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

exports.userProfile = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		const profile = await accountService.getProfile(req.params.userID);
		res.render('account/admin/userProfile', {
			layout: 'account',
			title: 'User Profile',
			profile,
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.lockUser = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		await accountService.lockUser(req.params.userID);
		res.redirect('/account/admin/acc');
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

exports.profileUpdate = async (req, res) => {
	try {
		if (req.body.changing === 'info') {
			const entity = {
				idAccount: req.user.idAccount,
				email: req.body.user_email,
				name: req.body.user_name,
				phone: req.body.user_phone,
				address: req.body.user_address,
			};
			const message = await accountService.updateProfileInfo(entity);
			const profile = await accountService.getProfile(req.user.idAccount);
			req.user.name = profile.name;
			res.render('account/profile', {
				layout: 'account',
				title: 'Main',
				profile,
				message,
			});
		}
		if (req.body.changing === 'password') {
			const entity = {
				idAccount: req.user.idAccount,
				current_pwd: req.body.user_current_password,
				new_pwd: req.body.user_password,
				cfm_new_pwd: req.body.user_cfm_password,
			};
			const message = await accountService.updatePassword(entity);
			const profile = await accountService.getProfile(req.user.idAccount);
			res.render('account/profile', {
				layout: 'account',
				title: 'Main',
				profile,
				message,
			});
		}
	} catch (error) {
		res.render('error', { error });
	}
};

exports.accountListAdmin = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		res.render('account/admin/adminAccountList', {
			layout: 'account',
			title: 'Admin Account List',
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
		res.render('account/admin/accountList', {
			layout: 'account',
			title: 'User Account List',
			list: 'user',
		});
	} catch (error) {
		res.render('error', { error });
	}
};

exports.list = async (req, res) => {
	try {
		if (!req.user || !req.user.role) res.redirect('/');
		const brands = await productService.getProductBrands();
		const categories = await productService.getProductCategories();
		res.render('account/admin/productList', {
			layout: 'account',
			title: 'Product List',
			categories,
			brands,
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
		if (!req.user || !req.user.role) res.redirect('/');
		const idProduct = req.params.productID;
		await productService.deleteProductComment(idProduct);
		await productService.deleteProductImage(idProduct);
		await productService.deleteProduct(idProduct);
		res.redirect('/account/admin/products');
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};

exports.uploadImage = (req, res) => {
	const id = Number(req.params.productID);
	if (!req.user || !req.user.role) res.redirect('/');
	res.render('account/admin/upload', {
		layout: 'account',
		title: 'Upload',
		id,
	});
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
			generalInfo: req.body.product_generalinfo,
			detailedDescription: req.body.product_detailed_desciption,
		};
		const { id, message, done } = await productService.createProduct(entity);
		console.log(id, message, done);
		if (!done) {
			res.render('account/admin/addProduct', {
				layout: 'account',
				title: 'Add a product',
				entity,
				message,
			});
		} else {
			res.redirect(`/account/admin/products/add/${id}`);
		}
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
			generalInfo: req.body.product_generalinfo,
			detailedDescription: req.body.product_detailed_desciption,
		};

		const { message, done } = await productService.updateProduct(entity);
		if (!done) {
			res.render('account/admin/editProduct', {
				layout: 'account',
				title: 'Edit a product',
				entity,
				message,
			});
		} else {
			res.redirect('/account/admin/products');
		}
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

exports.orderList = async (req, res) => {
	try {
		// if (!req.user || !req.user.role) res.redirect('/');

		res.render('account/admin/orderList', {
			layout: 'account',
			title: 'Order list',
		});
	} catch (error) {
		res.render('error', {
			error,
		});
	}
};
