const productService = require('./productService');

const list = async (req,res) => {
    const products = await productService.list();
    res.render('user/productList', { 
        title: 'Electro - Product List',
        products, 
    });
}
module.exports = {list};