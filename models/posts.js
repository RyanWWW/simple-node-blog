var Post = require('../lib/mongo').Post;
module.exports = {
    getPostById: function getPostById(postId) {
        return Post
            .findOne({ _id: postId })
            .select('content');
    },
    getPosts:function getPosts(){
        return Post
        .find({})
        .select('date title')
        .sort({ "_id": -1 });
    }
}