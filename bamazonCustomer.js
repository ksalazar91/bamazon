var mysql = require("mysql");
const cTable = require('console.table');
var inquirer = require("inquirer");
var List = require('prompt-list');

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
      console.log("");
      console.table(res);
      //connection.end();
      start();
    });
  }

  function start(){
      console.log("-----------------------------------------------------------------------");
      console.log("");
      

      inquirer
      .prompt([
        {
          name: "id",
          type: "input",
          message: "Input Product ID:_ "
        },
        {
          name: "unit",
          type: "input",
          message: "Input Product Quantity:_ ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        console.log(answer.id);
        console.log(answer.unit);
        search(parseInt(answer.id), parseInt(answer.unit));
      });
 

  }


function search(id, quantity){

  connection.query("SELECT * FROM products WHERE ?", { item_id: id }, function(err, res) {
    if(err){
      console.log("An Error Has Ocurr");
        restart();
      
    }
    else{
    
      var stock = parseInt(res[0].stock_quantity);

      if(stock === 0 || stock<quantity) {
        console.log("Insufficient quantity!")
        restart();
      }
      else if(stock>=quantity){
        var price = parseInt(res[0].price)*quantity;
        mysqlUpdate(stock, quantity, id, price);
      }
    }
    
  });

}

function mysqlUpdate(stock, quantity, id, price){
  var updateStock = stock - quantity;
  connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [updateStock, id], function (error, results, fields) {
    console.log("Transction is Completed");
    console.log("Total............. $" + price);
      setTimeout(function(){
        restart();
      },5000);
  });
}


function restart(){ 
  console.log('');
  var list = new List({
  name: 'input',
  message: 'Would You like to?',
  // choices may be defined as an array or a function that returns an array
  choices: [
      'New Transaction',
      'End Transaction'
  ]
  });

  list.ask(function(answer) {
    if(answer === 'New Transaction'){
      productsDisplay();
    }
    else if(answer === 'End Transaction'){
      connection.end();
    }
    
  });

}


//https://ksalazar91.github.io/Responsive-Portfolio/portfolio.html