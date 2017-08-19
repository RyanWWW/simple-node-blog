var express = require('express');
var router = express.Router();
var PostModel = require('../models/posts');
var marked = require('marked');

router.get('/:postId', function (req, res, next) {
    var postId = req.params.postId;
    PostModel
        .getPostById(postId)
        .exec(function (err, post) {
            if (err) {
                throw err.message;
            }
            post.content = marked(post.content);
            res.render('postPage', {
                post: post
            })
        })
});

module.exports = router;