const _blogPost = require('../models/blogPost');

//exports
// ==============================================
module.exports = {
	createBlogPost: createBlogPost
}

//functions to be exported and run through various routes
// ==============================================

function createBlogPost(req, res) {
	//Create a new blog post
	var blogPost 		 = new _blogPost(); //create a new instance of the blogPost model
	blogPost.subject	 = req.body.subject; //set the blog post's subject
	blogPost.description = req.body.description //set the blog post's description

	blogPost.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Blog Post created!' });
	});
	
}