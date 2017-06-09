var express = require('express');
var app = express();
var connector = require("./database/connector.js");
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.set('port', (process.env.PORT || 5000));


app.get("/api",function(req,res){ 
   connector.executeQuery("SELECT * from users",function(err,rows){
          res.end( JSON.stringify(rows) ) ;
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


