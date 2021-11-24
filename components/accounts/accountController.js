const login = async (req,res) => {
    try {
        res.render('login', {layout:false});
    } catch (err) {
        res.render('error',{error});
    }
}
const register = async (req,res) => {
    try {
        res.send('asd');
    } catch (err) {
        res.render('error',{error});
    }
}
module.exports ={
    login,
    register,
}