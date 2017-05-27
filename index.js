var express = require('express');
var app = express();
var connector = require("./database/connector");


app.set('port', (process.env.PORT || 5000));


app.get("/api",function(req,res){ 
   connector.excuteQuery("SELECT * from users",function(err,rows){
      var x =  JSON.stringify(rows) ;
         res.end(x);

   })
})

app.get('/', function(request, response) {
  response.end("END");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


