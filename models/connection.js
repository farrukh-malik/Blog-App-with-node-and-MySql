const mysql = require('mysql');
const databaseConnectionOption = require('./config');

const connection = mysql.createConnection(
    databaseConnectionOption
);

module.exports = connection;