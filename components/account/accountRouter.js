const express = require('express');
const passport = require('../middlewares/passport');
const router = express.Router();
const accountController = require('./accountController');

// Login
router.get('/login', accountController.login);
router.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/account/login',
		badRequestMessage: 'Please fill all the missing fields.',
		failureFlash: true,
	})
);
//Register
router.get('/register', accountController.register);
router.post('/register', accountController.createAccount);
// Password
router.get('/forgot-password', accountController.forgotPassword);
router.post('/forgot-password', accountController.forgotPasswordPost);
router.get('/reset-password', accountController.resetPassword);
router.post('/reset-password', accountController.resetPasswordPost);
// Logout
router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});
// Account Pages
router.get('/', accountController.userIndex);
router.get('/admin', accountController.adminIndex);

router.get('/admin/admin-acc', accountController.accountListAdmin); // Admin Account List
router.get('/admin/admin-acc/add', accountController.addAdminAccount); // Add admin account
router.post('/admin/admin-acc/add', accountController.addAdminAccountPost); // Add admin account POST
router.get('/admin/acc', accountController.accountListUser); // User Account List

router.get('/admin/products', accountController.list); // Product list
router.get('/admin/products/add', accountController.addProduct); // Add a Product
router.post('/admin/products/add', accountController.addProductPost); // Add a product POST
router.post('/admin/products/delete', accountController.deleteProduct); // Delete a product
router.get('/admin/products/edit/:productID', accountController.getEditProductPage); // Edit a product
router.post('/admin/products/edit/:productID', accountController.editProductPost); // Edit a product POST

router.get('/admin/products/add/:productID', (req, res) => {
	const id = Number(req.params.productID);
	if (!req.user || !req.user.role) res.redirect('/');
	res.render('account/admin/upload', {
		layout: 'account',
		title: 'Upload',
		id,
	});
}); // Upload images

router.post('/admin/products/add/:productID', accountController.uploadImagePost); // Upload images POST

module.exports = router;
