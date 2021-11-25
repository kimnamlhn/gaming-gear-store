const login = async (req,res) => {
    try {
        res.render('login', {layout:false});
    } catch (error) {
        res.render('error',{error});
    }
}
const register = async (req,res) => {
    try {
        res.send('asd');
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
    adminIndex,
    list,
}