const productService = require('./productService');

const list = async (req,res) => {
    const products = await productService.list();
    res.render('user/productList', { 
        title: 'Electro - Product List',
        products, 
    });
}

const details = async (req, res) => {
    const id = Number(req.params.productID);
    const product = await productService.getDetails(id);
    const image = await productService.getImages(id);
    if (!product) {
        return res.status(404).send('Product not found')
    }
    
    res.render('user/productDetails', { title: `${product.name} | Electro`, product, image });
}
module.exports = {list, details};