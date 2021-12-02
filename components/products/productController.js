const { response } = require('express');
const productService = require('./productService');
const commentService = require('../comment/commentService');

const list = async (req,res) => {
    try {
        const filter = {
            currentCategory: Number(req.query.category),
            currentBrand: req.query.brand
        }
        let currentCategory = Number(req.query.category);
        let page = req.query.page;
        const itemsPerPage = 12;
        page = productService.pageValidation(page);
        let {count:pageCount,rows:products} = await productService.getAllProducts(currentCategory, page, itemsPerPage);
        let sum = 0;
        pageCount.forEach(element => {
            sum+=element.count;
        })
        const brands = await productService.getProductBrandsCount();
        const categories = await productService.getProductCategoriesCount();
        pageCount = Math.ceil(sum/itemsPerPage);
        products = products.map(({
            'product_comments.AvgRating': AvgRating,
            'category_category.nameCategory': nameCategory, ...rest}) => ({
            AvgRating, 
            nameCategory,...rest
        }));
        res.render('store/productList', { 
            title: 'Electro - Product List',
            products, 
            currentCategory,
            categories,
            brands,
            page,
            pageCount
        });
    } catch (error) {
        res.render('error',{error});
    }
}

const details = async (req, res) => {
    try {
        const id = Number(req.params.productID);
        const product = await productService.getDetails(id);
        const relatedProducts = await productService.getDetailRelatedProducts(product.idProduct, product.category);
        const image = await productService.getDetailImages(id);
        ({count,rows:comments} = await commentService.getDetailComments(id));
        ({result: numRatings, ratingAvg} = await commentService.getDetailsCommentsCount(id,count));
        res.render('store/productDetails', { title: `${product.name} | Electro`, 
        product,
        image,
        relatedProducts,
        count,
        comments,
        numRatings,
        ratingAvg,
    });
    } catch (error) {
        res.render('error',{error});
    }
}

const checkout = async (req, res) => {
    try {
        res.render('store/checkout', { title: 'Electro - Checkout' });
    } catch (error) {
        res.render('error',{error});
    }
};

module.exports = {
    list, 
    details, 
    checkout
};