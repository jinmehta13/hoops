//create a new express router
// ==============================================
const express 			  = require('express'),
	  router 			  = express.Router(),
	  mainController 	  = require('./controllers/main.controller'),
	  blogPostsController = require('./controllers/blogPosts.controller');

//exports
// ==============================================
module.exports = router;

//middleware
// ==============================================
router.use(function(req, res, next) {
	//log API output to console
	console.log('Something is happening.');
	next(); //to pass into the next routes
});

//route definitions
// ==============================================

//main route
router.get('/', mainController.showHome);

//create a blog post
router.post('/blogPosts', blogPostsController.createBlogPost);