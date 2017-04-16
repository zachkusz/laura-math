var express = require("express");
var app = express();
var path = require('path');

// start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});

// Serve back static files
app.use(express.static(path.join(__dirname, './src')));

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './src/views/index.html'));
});