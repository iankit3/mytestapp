var express = require('express');
var app = express();
var connector = require("./database/connector.js");
var twilio = require('twilio');


app.set('port', (process.env.PORT || 5000));


app.get("/api",function(req,res){ 
   connector.executeQuery("SELECT * from users",function(err,rows){
          res.end( JSON.stringify(rows) ) ;
   })
})

app.post("/welcome/sms/reply/",function(req,res){

  var twilio = require('twilio');
      var twiml = new twilio.TwimlResponse();
          twiml.message(function() {
		        this.body('The Robots are coming! Head for the hills!');
			      this.media('https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg');
			          });
	      res.writeHead(200, {'Content-Type': 'text/xml'});
	          res.end(twiml.toString());

})

app.get('/', function(request, response) {
  response.end("END");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


