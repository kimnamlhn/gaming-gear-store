const productService = require('./productService');

const list = async (req,res) => {
    let page = req.query.page;
    const itemsPerPage = 9;
    page = productService.pageValidation(page);
    const list = await productService.getAllProducts(page, itemsPerPage);
    const products = list.rows;
    const count = Math.ceil(list.count/itemsPerPage);
    res.render('user/productList', { 
        title: 'Electro - Product List',
        products, 
        page,
        count
    });
}

const details = async (req, res) => {
    const id = Number(req.params.productID);
    const product = await productService.getDetails(id);
    const relatedProducts = await productService.getDetailRelatedProducts(product.idProduct, product.category);
    const image = await productService.getDetailImages(id);
    if (!product) {
        return res.status(404).send('Product not found')
    }
    
    res.render('user/productDetails', { title: `${product.name} | Electro`, product, image, relatedProducts });
}
module.exports = {list, details};