var express = require('express');
var app = express();
//var connector = require("./database/connector");
var db = require('./models/database')
const connectionString = require('./constants').dburl;

//const pg = require('pg');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

//app.set('port', (process.env.PORT || 5000) );

var PORT = process.env.port || 5000;

var results = [];

app.get("/api",function(req,res){ 
    var q = "SELECT * from users";
    db.executeQuery(q, (err,rows) => {
       res.send(rows)
    }) 	
})

app.post("/welcome/sms/reply/",function(req,res){
  const twiml = new MessagingResponse();

    twiml.message('The Robots are coming! Head for the hills!');

      res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
})

app.get('/', function(request, response) {
  response.end("END");
});

app.listen(PORT, function() {
  console.log('Node app is running on port', PORT);
});


