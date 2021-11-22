const productService = require('./productService');

const list = async (req,res) => {
    const products = await productService.list();
    res.render('user/productList', { 
        title: 'Electro - Product List',
        products, 
    });
}

const details = async (req, res) => {
    const products = await productService.detail();
    const id = Number(req.params.productID);
    const product = products.find(product => Object.values(product)[0] === id);

    if (!product) {
        return res.status(404).send('Product not found')
    }
    
    res.render('user/productDetails', { title: 'Electro - Product Details', product });
}
module.exports = {list, details};