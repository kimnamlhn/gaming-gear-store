const list = (req,res) => {
    res.render('user/productList', { title: 'Electro - Product List' });
}
module.exports = {list};