const productService = require('../products/productService')

const login = async (req,res) => {
    try {
        res.render('account/login', {layout:'auth',title:'Login'});
    } catch (error) {
        res.render('error',{error});
    }
}

const register = async (req,res) => {
    try {
        res.render('account/register',{layout:'auth', title:'Register'});
    } catch (error) {
        res.render('error',{error});
    }
}

const forgotPassword = async (req,res) => {
    try {
        res.render('account/forgot-password',{layout:'auth', title:'Forgot Password'});
    } catch (error) {
        res.render('error',{error});
    }
}

const userIndex = async (req,res) => {
    try {
        res.render('account/user/index', {layout:'user/account',title:'Main'});
    } catch (error) {
        res.render('error',{error});
    }
}

const adminIndex = async (req,res) => {
    try {
        res.render('account/admin/index', {layout:'admin/account',title:'Main'});
    } catch (error) {
        res.render('error',{error});
    }
}

const list = async (req,res) => {
    try {
        const products = await productService.getAllProductsAdmin();
        res.render('account/admin/productList', {layout:'admin/account',title:'Product List',products});
    } catch (error) {
        res.render('error',{error});
    }
}

const addProduct = async (req, res) => {
    try {
        res.render('account/admin/addProduct', {layout:'admin/account',title: 'Add a product'})
    } catch (error) {
        res.render('error',{error})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const idProduct = req.body.idProduct;  
        console.log("id body",idProduct);
        await productService.deleteProduct(idProduct);   
        res.redirect(req.headers.referer);
    } catch (error) {
        res.render('error',{error})
    }
}

module.exports = {
    login,
    register,
    forgotPassword,
    userIndex,
    adminIndex,
    list,
    addProduct,
    deleteProduct
}