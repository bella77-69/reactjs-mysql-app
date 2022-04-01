const mysql = require('mysql');

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "rootroot",
database:"blog_posts" 
})

module.exports = db;