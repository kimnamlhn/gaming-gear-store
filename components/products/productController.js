const productService = require('./productService');

const list = async (req,res) => {
    const products = await productService.list();
    console.log(JSON.stringify(products));
    res.render('user/productList', { 
        title: 'Electro - Product List',
        products, 
    });
}
module.exports = {list};