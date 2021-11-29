const express = require('express');
// const passport = require('../../auth/passport');
const router = express.Router();

const accountController = require('./accountController');

router.get('/login', accountController.login);
router.get('/register', accountController.register);
router.get('/forgot-password', accountController.forgotPassword);
// router.post('/login',
//     passport.authenticate('local'),
//     function(req, res) {
//         if(req.user) res.redirect('/login');
//         else res.redirect('/login');
//     }
// );
// router.get('/', accountController.index);
// router.get('/admin'. accountController.adminIndex);
router.get('/', accountController.userIndex);
router.get('/admin', accountController.adminIndex);

router.get('/admin/products', accountController.list); // Product list
router.get('/admin/products/add', accountController.addProduct); // Add a Product
router.post('/admin/products/delete', accountController.deleteProduct); // Delete a product
router.post('/admin/products/add', accountController.addProductPost); // Add a product POST
router.post(
	'/admin/products/edit/:productID',
	accountController.editProductPost
); // Edit a product POST
router.get(
	'/admin/products/edit/:productID',
	accountController.getEditProductPage
); // Edit a product
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
