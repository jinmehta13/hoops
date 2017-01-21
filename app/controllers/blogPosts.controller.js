const blogPost = require('../models/blogPost');

//exports
// ==============================================
module.exports = {
	createBlogPost: createBlogPost,
	showBlogPosts: showBlogPosts,
	getBlogPost: getBlogPost,
	updateBlogPost: updateBlogPost,
	deleteBlogPost: deleteBlogPost
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

function getBlogPost(req, res) {
	blogPost.findById(req.params.blogPost_id, function(err, blogPost) {
		if (err)
			res.send(err);

		res.json(blogPost);
	});
}

function updateBlogPost(req, res) {
	blogPost.findById(req.params.blogPost_id, function(err, blogPost) {
		if (err)
			res.send(err);

		//update the blog post
		blogPost.subject = req.body.subject;
		blogPost.description = req.body.description;

		//save the blog post
		blogPost.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Blog Post updated!' });
		});
	});
}

function deleteBlogPost(req, res) {
	blogPost.remove({
		_id: req.params.blogPost_id
	}, function(err, blogPost) {
		if (err)
			res.send(err);

		res.json({ message: 'Blog Post successfully deleted' });
	});

}