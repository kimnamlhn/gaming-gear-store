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
        res.render('account/admin/productList', {layout:'admin/account',title:'Product List'});
    } catch (error) {
        res.render('error',{error});
    }
}

module.exports = {
    login,
    register,
    forgotPassword,
    userIndex,
    adminIndex,
    list,
}