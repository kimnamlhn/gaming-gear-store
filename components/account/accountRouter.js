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

// Product list
router.get('/admin/products', accountController.list);
router.get('/admin/products/add', accountController.addProduct);
router.post('/admin/products/delete', accountController.deleteProduct);
router.post('/admin/products/add', accountController.addProductPost);
<<<<<<< HEAD
router.post('/admin/products/edit/:productID', accountController.editProductPost);
router.get('/admin/products/edit/:productID', accountController.getEditProductPage);
=======
router.get('/admin/products/add/upload', (req, res) => {
	res.render('account/admin/upload', {
		layout: 'admin/account',
		title: 'Upload',
	});
});
// test
>>>>>>> 1c6412ec51dd171348192b10b277afe3fb810bf6

router.get(
	'/admin/products/edit/:productID',
	accountController.getEditProductPage
);

module.exports = router;
