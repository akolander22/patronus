var express = require('express');
var app = express();
var index = require('./routes/index');

var bodyParser = require('body-parser');
var pg = require('pg');

var config = {
  database: 'harry',
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
    client.query('INSERT INTO people (first_name, last_name) VALUES ($1, $2)', [personFirst, personLast], function(err){
      if(err){
      console.log('Query error', err);
      response.sendStatus(500);
    } else {
      console.log('Great success');
      response.sendStatus(200);
      client.end()
    }


})

})

});

app.get('/people', function(request, response){
  var client = new pg.Client(config);

  // var firstName = '';
  // var lastName = '';

  client.connect(function(err){
    if (err){
      console.log('connection error', err);

    }
    client.query('SELECT * FROM people', [], function(err, result){
      if(err){
        console.log('Query error', err);
        response.sendStatus(500);
      }else{
        console.log('success');
        response.send(result.rows);
      }
    })
  })
});

app.post('/patronus', function(request, response){
  var client = new pg.Client(config);
  console.log(request.body);
  var patronusName = request.body.patronus;


  client.connect(function(err){
    if(err){
      console.log('Connection error', err);
    }
    client.query('INSERT INTO patronuses (patronus_name) VALUES ($1)', [patronusName], function(err){
      if(err){
      console.log('Query error', err);
      response.sendStatus(500);
    } else {
      console.log('Great success');
      response.sendStatus(200);
      client.end()
    }


})

})

});

app.get('/patronus', function(request, response){
  var client = new pg.Client(config);


  client.connect(function(err){
    if (err){
      console.log('connection error', err);

    }
    client.query('SELECT * FROM patronuses', [], function(err, result){
      if(err){
        console.log('Query error', err);
        response.sendStatus(500);
      }else{
        console.log('success');
        response.send(result.rows);
      }
    })
  })
});



var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Server running on port', port);
});
