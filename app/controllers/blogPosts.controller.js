const blogPost = require('../models/blogPost');

//exports
// ==============================================
module.exports = {
	createBlogPost: createBlogPost,
	showBlogPosts: showBlogPosts
}

//functions to be exported and run through various routes
// ==============================================

function createBlogPost(req, res) {
	//Create a new blog post
	blogPost.subject	 = req.body.subject; //set the blog post's subject
	blogPost.description = req.body.description //set the blog post's description

	blogPost.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Blog Post created!' });
	});
	
}

function showBlogPosts(req, res) {
	blogPost.find(function(err, blogPosts) {
		if (err)
			res.send(err);

		res.json(blogPosts);
	});
}