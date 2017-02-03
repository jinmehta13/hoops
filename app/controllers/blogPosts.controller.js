const _blogPost = require('../models/blogPost');

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
	var blogPost = new _blogPost(); //create a new instance of the blogPost model
	blogPost.subject	 = req.body.postSubject; //set the blog post's subject
	blogPost.description = req.body.postBody //set the blog post's description
	blogPost.team = req.body.team;
	blogPost.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Blog Post created!' });
	});
	
}

function showBlogPosts(req, res) {
	_blogPost.find(function(err, blogPosts) {
		if (err)
			res.send(err);

		res.json(blogPosts);
	});
}

function getBlogPost(req, res) {
	_blogPost.findById(req.params.blogPost_id, function(err, blogPost) {
		if (err)
			res.send(err);

		res.json(blogPost);
	});
}

function updateBlogPost(req, res) {
	_blogPost.findById(req.params.blogPost_id, function(err, blogPost) {
		if (err)
			res.send(err);

		//update the blog post
		blogPost.subject = req.body.postSubject;
		blogPost.description = req.body.postBody;

		//save the blog post
		blogPost.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Blog Post updated!' });
		});
	});
}

function deleteBlogPost(req, res) {
	_blogPost.remove({
		_id: req.params.blogPost_id
	}, function(err, blogPost) {
		if (err)
			res.send(err);

		res.json({ message: 'Blog Post successfully deleted' });
	});

}