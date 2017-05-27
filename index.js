var express = require('express');
var app = express();
//var connector = require("./database/connector.js");

var connector = require("./connector.js");


app.set('port', (process.env.PORT || 5000));


app.get("/api",function(req,res){ 
   connector.executeQuery("SELECT * from users",function(err,rows){
          res.end( JSON.stringify(rows) ) ;
   })
})

app.get('/', function(request, response) {
  response.end("END");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


