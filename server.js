var express = require('express');
var app = express();
var index = require('./routes/index');

var bodyParser = require('body-parser');
var pg = require('pg');

var config = {
  database: 'Harry',
  port: 5432
};





app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/', index);




var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Server running on port', port);
});
