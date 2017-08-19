var config = require('config-lite')(__dirname);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(config.mongodb);
var postSchema = new Schema({
    author: String,
    title: String,
    content: String,
    date: Date
});
module.exports={
    Post:mongoose.model('Post',postSchema)
}