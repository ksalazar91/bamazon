var mysql = require("mysql");
const cTable = require('console.table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    
    productsDisplay();
  });
  
  function productsDisplay() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.table(res);
      //connection.end();
      start();
    });
  }

  function start(){
      console.log("-----------------------------------------------------------------------");
      console.log("");
      
  }





