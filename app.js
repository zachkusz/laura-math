var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var realLifeQuestions = require('./routes/realLifeQuestions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Serve back static files
app.use(express.static(path.join(__dirname, './src')));

// process.env.MONGODB_URI will only be defined if you are running on Heroku
if(process.env.MONGODB_URI != undefined) {
  // use the string value of the environment variable
  // var  databaseURI = 'mongodb://heroku_3rd65rt7:jkbu598e43ni3jskajvh60d97u@ds017155.mlab.com:17155/heroku_3rd65rt7';
  var databaseURI = process.env.MONGODB_URI;
} else {
  // use the local database server
  databaseURI = 'mongodb://localhost:27017/lauraMath';
}

mongoose.connect(databaseURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
});

//routes
app.use('/realLifeQuestions', realLifeQuestions);

// start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './src/views/index.html'));
});