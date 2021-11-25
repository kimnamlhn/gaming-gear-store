const login = async (req,res) => {
    try {
        res.render('login', {layout:'auth',title:'Login'});
    } catch (error) {
        res.render('error',{error});
    }
}

const register = async (req,res) => {
    try {
        res.render('register',{layout:'auth', title:'Register'});
    } catch (error) {
        res.render('error',{error});
    }
}

const forgotPassword = async (req,res) => {
    try {
        res.render('forgot-password',{layout:'auth', title:'Forgot Password'});
    } catch (error) {
        res.render('error',{error});
    }
}

const adminIndex = async (req,res) => {
    try {
        res.render('admin/index', {layout:'admin',title:'Main'});
    } catch (error) {
        res.render('error',{error});
    }
}

const list = async (req,res) => {
    try {
        res.render('admin/productList', {layout:'admin',title:'Product List'});
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