const commentService = require('./commentService');

exports.addComment = async (req,res) => {
    try {
        let userid = null;
        if(req.user) userid = req.user.idAccount;
        const comment = {
            idAccount: userid,
            idProduct: req.params.productID,
            name: req.body.review_name,
            content: req.body.review_content,
            rating: req.body.review_rating
        }
        await commentService.addComment(comment);
        res.redirect(`/products/${req.params.productID}`)
    } catch (error) {
        res.render('error',{error});
    }
}