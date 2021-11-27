const express = require('express');
const router = express.Router();

const productController = require('./productController');

router.get('/', productController.list); // Product list
router.get('/checkout', productController.checkout); // Product checkout
router.get('/:productID', productController.details); // Product details
router.post('/:productID', function (req, res) {
    // console.log('name: ',req.body.review_name);
    // console.log('review:', req.body.review_content);
    // console.log('rating:', req.body.review_rating);
    const id = req.params.productID;
    res.redirect(`${id}`);
})

module.exports = router;