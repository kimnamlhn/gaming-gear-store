const productService = require('../products/productService');
const accountService = require('./accountService');

const login = async (req, res) => {
	try {
		if (!req.user)
			res.render('account/login', {
				layout: 'auth',
				title: 'Login',
				wrongPassword: req.query.wrongPassword !== undefined
			});
		else res.redirect('/')
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const register = async (req, res) => {
	try {
		if(req.user) res.redirect('/')
		else
			res.render('account/register', {
				layout: 'auth',
				title: 'Register'
			});
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const createAccount = async(req,res) => {
	try {
		const entity = {
			email: req.body.user_email,
			password: req.body.user_cfm_password,
			name: req.body.user_name,
			phone: req.body.user_phone,
			address: req.body.user_address,
			role: 0,
		}
		const user = await accountService.createAccount(entity);
		req.login(user, function(err) {
			if (!err) {
				res.redirect('/')
			}
			else console.log(err)
		})
		res.redirect('/account/login');
	} catch (err) {
		res.render('error', {err});
	}
}

const forgotPassword = async (req, res) => {
	try {
		if(req.user) res.redirect('/');
		res.render('account/forgot-password', {
			layout: 'auth',
			title: 'Forgot Password',
		});
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const userIndex = async (req, res) => {
	try {
		if (req.user) res.render('account/user/index', {
			layout: 'account',
			title: 'Main',
		});
		else res.redirect('/');
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const adminIndex = async (req, res) => {
	try {
		if(!req.user || !req.user.role) res.redirect('/');
			res.render('account/admin/index', {
				layout: 'account',
				title: 'Main',
			});
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const accountListAdmin = async (req, res) => {
	try {
		if(!req.user || !req.user.role) res.redirect('/');
		let {count,rows:accounts} = await accountService.listAdminAccounts()
		res.render('account/admin/accountList', {
			layout: 'account',
			title: 'Admin Account List',
			list: 'admin',
			accounts
		})
	} catch (error) {
		res.render('error', {error});
	}
}

const addAdminAccount = async (req, res) => {
	try {
		if(!req.user || !req.user.role) res.redirect('/');
		res.render('account/admin/addAccount', {
			layout: 'account',
			title: 'Add an Admin Account',
			type: 'admin'
		})
	} catch (error) {
		res.render('error', {error});
	}
}

const addAdminAccountPost = async (req, res) => {
	try {
		const entity = {
			email: req.body.user_email,
			password: req.body.user_cfm_password,
			name: req.body.user_name,
			phone: req.body.user_phone,
			address: req.body.user_address,
			role: 1,
		}
		const user = await accountService.createAccount(entity);
		req.login(user, function(err) {
			if (!err) {
				res.redirect('/')
			}
			else console.log(err)
		})
		res.redirect('/account/login');
	} catch (err) {
		res.render('error', {err});
	}
}

const accountListUser = async (req, res) => {
	try {
		if(!req.user || !req.user.role) res.redirect('/');
		res.render('account/admin/accountList', {
			layout: 'account',
			title: 'User Account List',
			list: 'user'
		})
	} catch (error) {
		res.render('error', {error});
	}
}

const list = async (req, res) => {
	try {
		if(!req.user || !req.user.role) res.redirect('/');
		const products = await productService.getAllProductsAdmin();
		res.render('account/admin/productList', {
			layout: 'account',
			title: 'Product List',
			products,
		});
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const addProduct = async (req, res) => {
	try {
		if(!req.user || !req.user.role) res.redirect('/');
		res.render('account/admin/addProduct', {
			layout: 'account',
			title: 'Add a product',
		});
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const deleteProduct = async (req, res) => {
	try {
		const idProduct = req.body.idProduct;
		await productService.deleteProductComment(idProduct);
		await productService.deleteProductImage(idProduct);
		await productService.deleteProduct(idProduct);
		res.redirect(req.headers.referer);
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const uploadImagePost = async (req, res) => {
	const id = req.params.productID;
	await productService.uploadImage(req, id);
	res.redirect('/account/admin/products');
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
		const id = await productService.createProduct(entity);
		res.redirect(`/account/admin/products/add/${id}`);
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const editProductPost = async (req, res) => {
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
			error
		});
	}
};

const getEditProductPage = async (req, res) => {
	try {
		if(!req.user || !req.user.role) res.redirect('/');
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
			error
		});
	}
};

module.exports = {
	login,
	register,
	createAccount,
	forgotPassword,
	userIndex,
	adminIndex,
	addAdminAccount,
	addAdminAccountPost,
	accountListAdmin,
	accountListUser,
	list,
	addProduct,
	deleteProduct,
	addProductPost,
	getEditProductPage,
	editProductPost,
	uploadImagePost,
};