const express = require('express');
const router = express.Router();

const apiCommentController = require('./apiCommentController');

router.get('/:productID', apiCommentController.getComments);
router.post('/submit/:productID', apiCommentController.addComment);

module.exports = router;
