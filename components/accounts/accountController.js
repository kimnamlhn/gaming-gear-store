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

const adminIndex = async (req,res) => {
    try {
        res.render('account/index', {layout:'account',title:'Main'});
    } catch (error) {
        res.render('error',{error});
    }
}

const list = async (req,res) => {
    try {
        res.render('account/productList', {layout:'account',title:'Product List'});
    } catch (error) {
        res.render('error',{error});
    }
}

module.exports = {
    login,
    register,
    forgotPassword,
    adminIndex,
    list,
}