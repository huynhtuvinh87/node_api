require("dotenv").config();
var express = require('express');
var bodyparser = require('body-parser');
  
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
  
var server = app.listen(process.env.APP_PORT, function() {
  console.log('Server listening on port ' + server.address().port);
});
module.exports = app

var connection = require('./config/database');
var router_posts = require('./routes/post');

app.use('/',router_posts);