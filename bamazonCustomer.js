var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({

  host: "localhost",

  port: 3306,

  user: "root",

  password: "lawton1331",
  database: "bamazonDB"

});

connection.connect(function (error) {
  if (error) throw err;
  // console.log("connection id:   " + connection.threadId);
  displayProducts();
 });


// Promt user 2 messages
function buyProducts() {



  // The first should ask them the ID of the product they would like to buy.
  inquirer.prompt([
    {
      type: 'input',
      name: 'item_id',
      message: 'Please enter the Item ID which you would like to purchase.',
      // validate: validateInput,
      filter: Number
    },
    //The second message should ask how many units of the product they would like to buy.
    {
      type: 'input',
      name: 'quantity',
      message: 'How many do you need?',
      // validate: validateInput,
      filter: Number
    }]).then(function (answers) {
      var quantity = answers.quantity;
      var item = answers.item_id;
      var queryStr = 'SELECT * FROM products WHERE ?';

      //Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

      connection.query(queryStr, { item_id: item }, function (error, results, fields) {
        var price = results[0].price;
        if (error) throw err;
        // console.log(results[0].stock_quantity);
        if (quantity <= results[0].stock_quantity) {
          connection.query('UPDATE products SET stock_quantity = ' + (results[0].stock_quantity - quantity) + ' WHERE item_id = ' + item, function (error, results, fields) {
            if (error) throw err;
            console.log("Your order has been placed!");
            console.log("Total: " +  "$" + price * quantity);
            connection.end();
          })
        } else {
          console.log("Do you really need that many?!");
          connection.end();

        }
      })
    })
    
  }

// Display all of the items available for sale. Include the ids, names, and prices of products for sale.

function displayProducts() {
  connection.query("SELECT * FROM products", function (error, results) {
    if (error) throw err;
    for (let i = 0; i < results.length; i++) {
      console.log("\r\n" + "ID:      " + results[i].item_id);
      console.log("Product: " + results[i].product_name);
      console.log("Price:   " + "$" + results[i].price);
    }
    buyProducts();
  })
}




