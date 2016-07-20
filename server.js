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

app.post('/people', function(request, response){
  var client = new pg.Client(config);
  console.log(request.body);
  var personFirst = request.body.first_name;
  var personLast = request.body.last_name;
  
  client.connect(function(err){
    if(err){
      console.log('Connection error', err);
    }
})

});
  // client.query('INSERT INTO People (first_name, last_name) VALUES ($1)', []







var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Server running on port', port);
});
