const express = require('express');
// const passport = require('../../auth/passport');
const router = express.Router();

const accountController = require('./accountController');
const productController = require('../products/productController');


router.get('/login', accountController.login);
router.get('/register', accountController.register);
router.get('/forgot-password',accountController.forgotPassword);
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
router.post('/admin/products/delete', function(req, res){
    console.log("abc");
    const id = req.params.productID;  
    console.log("id test",id);
    productController.deleteProduct(req, res);
    res.redirect(req.headers.referer);
} );

module.exports = router;