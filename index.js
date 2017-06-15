var express = require('express');
var app = express();
var connector = require("./database/connector");
const connectionString = require('./constants').dburl;

const pg = require('pg');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.set('port', (process.env.PORT || 5000));


app.get("/api",function(req,res){ 
   /*connector.executeQuery("SELECT * from users",function(err,rows){
          res.end( JSON.stringify(rows) ) ;
   })*/

   pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM users;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });

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


