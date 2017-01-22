//create our blogPost model
// ==============================================
var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

var BlogPostSchema = new Schema({
	subject: String,
	description: String
});

//exports
// ==============================================
module.exports = mongoose.model('blogPost', BlogPostSchema);