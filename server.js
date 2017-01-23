//load environment variables
// ==============================================
require('dotenv').config();

//grab our dependencies
// ==============================================
var mongoose 	= require('mongoose');
var nodemon 	= require('nodemon');
var bodyParser 	= require('body-parser');

//configure our application
// ==============================================
var express = require('express');
var app     = express();
var port    = process.env.PORT || 8080;

//configure app to use bodyParser() so we can get data from POST
// ==============================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('../hoops'));
app.use(express.static('../hoops/app/config'));
app.use(express.static('../hoops/app/controllers'));
app.use(express.static('../hoops/models'));
app.use(express.static('../hoops/styles'));
app.use(express.static('../hoops/views'));







app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});



//prefix the routes with /api
// ==============================================
app.use('/api', require('./app/routes'));

//DB connection
// ==============================================
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);

mongoose.connection.on('open', function(){
console.log('connection is open');
});


// ROUTES
// ==============================================

/*
// sample route with a route the way we're used to seeing it

// we'll create our routes here
*/

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
