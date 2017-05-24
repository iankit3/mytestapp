var settings = require('../settings/settings');
var mysql = require('mysql');
var sqlquery = "SELECT emp_ID as E from user";

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database:'users',
    password: settings.consts.password
})

module.exports = pool;
