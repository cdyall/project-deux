// Set up MySQL connection.
require("dotenv").config();
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "im95kuqh16qvxl73",
    password: process.env.PASSWORD,
     database: "jdmn2ueudhivhrc5"
    
  });
  console.log(process.env.PASSWORD)
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
