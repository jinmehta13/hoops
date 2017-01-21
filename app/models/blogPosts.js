//create our blogPosts model
// ==============================================
var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

var BlogPostsSchema = new Schema({
	subject: String,
	description: String
});

//exports
// ==============================================
module.exports = mongoose.model('blogPosts', BlogPostsSchema);