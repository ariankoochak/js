var mysql = require('mysql');
var serverAccess = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "PCmaker",
})

module.exports = serverAccess;