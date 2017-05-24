var express = require('express');
//var connectionManager = require('./database/connectionManager');
//var bodyParser = require('body-parser');
//var connection = require('./database/connector');

//var path = require('path');
var app = express();
app.set('port', (process.env.PORT || 5000));
 /*app.get("/api",function(req,res){ 
    connection.executeQuery('SELECT * from users',function(err,rows){
        res.end( JSON.stringify(rows) )
    })
 })*/

app.get("/", function (req, res) {
    res.end("hi");
})
