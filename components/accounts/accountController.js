const login = async (req,res) => {
    try {
        res.render('login', {layout:false});
    } catch (error) {

    }
}
const register = async (req,res) => {
    try {
        res.send('asd');
    } catch (error) {

    }
}
module.exports = {
    login,
    register,
}