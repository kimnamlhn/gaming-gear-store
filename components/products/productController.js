const productService = require('./productService');

const list = async (req,res) => {
    try {
        let currentCategory = Number(req.query.category);
        let page = req.query.page;
        const itemsPerPage = 12;
        page = productService.pageValidation(page);
        ({count,rows:products} = await productService.getAllProducts(currentCategory, page, itemsPerPage));
        const brands = await productService.getProductBrandsCount();
        const categories = await productService.getProductCategoriesCount();
        count = Math.ceil(count/itemsPerPage);
        res.render('store/productList', { 
            title: 'Electro - Product List',
            products, 
            currentCategory,
            categories,
            brands,
            page,
            count
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
        ({count,rows:comments} = await productService.getDetailComments(id));
        ({result: numRatings, ratingAvg} = await productService.getDetailsCommentsCount(id,count));
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
module.exports = {list, details, checkout};