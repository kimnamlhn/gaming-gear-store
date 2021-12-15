const productService = require('./productService');

exports.list = async (req,res) => {
    try {
        const brands = await productService.getProductBrands();
        const categories = await productService.getProductCategories();
        res.render('store/productList', { 
            title: 'Electro - Product List',
            categories,
            brands,
        });
    } catch (error) {
        res.render('error',{error});
    }
}

exports.details = async (req, res) => {
    try {
        const id = Number(req.params.productID);
        const product = await productService.getDetails(id);
        const relatedProducts = await productService.getDetailRelatedProducts(product.idProduct, product.category);
        const image = await productService.getDetailImages(id);
        res.render('store/productDetails', { title: `${product.name} | Electro`, 
        product,
        image,
        relatedProducts,
    });

    } catch (error) {
        res.render('error',{error});
    }
}

exports.checkout = async (req, res) => {
    try {
        res.render('store/checkout', { title: 'Electro - Checkout' });
    } catch (error) {
        res.render('error',{error});
    }
};