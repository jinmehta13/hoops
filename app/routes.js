//create a new express router
// ==============================================
const express 			  = require('express'),
	  router 			  = express.Router(),
	  mainController 	  = require('./controllers/main.controller'),
	  blogPostsController = require('./controllers/blogPosts.controller');

//exports
// ==============================================
module.exports = router;

//route definitions
// ==============================================

//main route
router.get('/', mainController.showHome);