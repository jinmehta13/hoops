var mongoose = require('mongoose');
var nodemon = require('nodemon');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');

var express = require('express');
var app     = express();
var port    =  process.env.PORT || 8080;

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/', function(req, res) {
    res.send('hello world!');  
});

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
