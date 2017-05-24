var settings = require('../settings/settings');

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'users',
    password: settings.consts.password
})

connection.call = function(){
    console.log('hi')
}
connection.start = function () {
    connection.connect()

    connection.query('SELECT * from users', function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0]);
    })

    connection.end();
}

module.exports = {
    connection: connection
}
