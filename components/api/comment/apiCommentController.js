const apiCommentService = require('./apiCommentService');

exports.addComment = async (req,res) => {
    let userid = null;
    if(req.user) userid = req.user.idAccount;
    const entity = {
        idAccount: userid,
        idProduct: req.params.productID,
        name: req.body.review_name,
        content: req.body.review_content,
        rating: req.body.review_rating
    }
    if(entity.name.length === 0){
        res.status(400).json({status: 'fail',message:'Name cannot be empty'});
        return;
    }
    try {
        const newComment = await apiCommentService.addComment(entity);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}

exports.getComments = async (req,res) => {
    const idProduct = req.params.productID
    try {
        const comments = await apiCommentService.getComments(idProduct);
        const commentsCount = await apiCommentService.getCommentsCount(idProduct,comments.count);
        const obj = {comments,commentsCount};
        res.status(201).json(obj);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}