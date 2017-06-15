var mysql = require('mysql');
var sqlquery = "SELECT emp_ID as E from user";

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'ec2-54-225-107-107.compute-1.amazonaws.com',
    port: '5432',
    user: 'jfbhhzemjqtzjy',
    database:'dki5u7o4v56in',
    password: '420d03ef38cc3a97756c737d7839bcd1a6a26d017793bab834b79565bcb34fb3'
})

module.exports = pool;

// psql -h ec2-54-225-107-107.compute-1.amazonaws.com -U jfbhhzemjqtzjy dki5u7o4v56in
//-----------------to get a psql terminal------------------------------
//password - 420d03ef38cc3a97756c737d7839bcd1a6a26d017793bab834b79565bcb34fb3

/*
 CREATE TABLE users (
    userid   varchar(30)  primary key,
    username varchar(200) NOT NULL,
    address  varchar(300) NOT NULL,
    gender   varchar(30)  default NULL
);
*/

/*CREATE TABLE users (userid   varchar(30)  primary key,username varchar(200) NOT NULL,address  varchar(300) NOT NULL,gender   varchar(30)  default NULL);
*/
