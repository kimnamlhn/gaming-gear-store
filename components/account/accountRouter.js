const express = require('express');
const passport = require('./passport');
const router = express.Router();

const accountController = require('./accountController');

router.get('/login', accountController.login);
router.post('/login', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/account/login?wrongPassword'
})); // Login POST
router.get('/register', accountController.register);
router.post('register', accountController.registerPost);
router.get('/forgot-password', accountController.forgotPassword);

router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
})

router.get('/', accountController.userIndex);
router.get('/admin', accountController.adminIndex);

router.get('/admin/products', accountController.list); // Product list
router.get('/admin/products/add', accountController.addProduct); // Add a Product
router.post('/admin/products/add', accountController.addProductPost); // Add a product POST
router.post('/admin/products/delete', accountController.deleteProduct); // Delete a product
router.get('/admin/products/edit/:productID', accountController.getEditProductPage); // Edit a product
router.post('/admin/products/edit/:productID', accountController.editProductPost); // Edit a product POST

router.get('/admin/products/add/:productID', (req, res) => {
	const id = Number(req.params.productID);
	res.render('account/admin/upload', {
		layout: 'admin/account',
		title: 'Upload',
		id,
	});
}); // Upload images

router.post(
	'/admin/products/add/:productID',
	accountController.uploadImagePost
); // Upload images POST
module.exports = router;