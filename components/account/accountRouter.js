const express = require('express');
const router = express.Router();
const accountController = require('./accountController');

// Account Pages
router.get('/', accountController.userIndex);
router.post('/', accountController.profileUpdate);

router.get('/admin', accountController.adminIndex);
router.post('/admin', accountController.profileUpdate);

router.get('/admin/admin-acc', accountController.accountListAdmin); // Admin Account List
router.get('/admin/admin-acc/add', accountController.addAdminAccount); // Add admin account
router.post('/admin/admin-acc/add', accountController.addAdminAccountPost); // Add admin account POST
router.get('/admin/acc', accountController.accountListUser); // User Account List
router.get('/admin/acc/:userID', accountController.userProfile); // View user profile
router.get('/admin/acc/lock/:userID', accountController.lockUser); // Lock user account

router.get('/admin/products', accountController.list); // Product list
router.get('/admin/products/add', accountController.addProduct); // Add a Product
router.post('/admin/products/add', accountController.addProductPost); // Add a product POST
router.get('/admin/products/delete/:productID', accountController.deleteProduct); // Delete a product
router.get('/admin/products/edit/:productID', accountController.getEditProductPage); // Edit a product
router.post('/admin/products/edit/:productID', accountController.editProductPost); // Edit a product POST
router.get('/admin/products/add/:productID', accountController.uploadImage); // Upload images
router.post('/admin/products/add/:productID', accountController.uploadImagePost); // Upload images POST

router.get('/admin/orders', accountController.orderList);

module.exports = router;
