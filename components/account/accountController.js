const productService = require('../products/productService');

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

const forgotPassword = async (req, res) => {
	try {
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
		// if (req.user)
			res.render('account/admin/index', {
				layout: 'account',
				title: 'Main',
			});
		// else res.redirect('/');
	} catch (error) {
		res.render('error', {
			error
		});
	}
};

const list = async (req, res) => {
	try {
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
		const id = Number(req.params.productID);
		const product = await productService.getDetails(id);
		const image = await productService.getDetailImages(id);

		console.log('DATA TEST:', id, product, image);

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
	forgotPassword,
	userIndex,
	adminIndex,
	list,
	addProduct,
	deleteProduct,
	addProductPost,
	getEditProductPage,
	editProductPost,
	uploadImagePost,
};