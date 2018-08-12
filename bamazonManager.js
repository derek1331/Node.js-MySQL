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
  addInventory();
});


// * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
function availableProducts() {
  connection.query("SELECT * FROM products", function (error, results) {
    if (error) throw err;
    for (let i = 0; i < results.length; i++) {
      console.log("\r\n" + "ID:       " + results[i].item_id);
      console.log("Product:  " + results[i].product_name);
      console.log("Price:    " + "$" + results[i].price);
      console.log("Quantity: " + results[i].stock_quantity);
    }
  })
}


// * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.
function lowInventory() {
  connection.query("SELECT * FROM products", function (error, results) {
    if (error) throw err;
    for (let i = 0; i < results.length; i++) {
      if (results[i].stock_quantity < 5) {
        console.log("\r\n" + "ID:       " + results[i].item_id);
        console.log("Product:  " + results[i].product_name);
        console.log("Price:    " + "$" + results[i].price);
        console.log("Quantity: " + results[i].stock_quantity);
      }
    }
  })
}





// * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
function addInventory() {
  connection.query("SELECT * FROM products", function (error, results) {
    if (error) throw err;
    for (let i = 0; i < results.length; i++) {
    
      
    }
    inquirer.prompt([
      {
        type: 'input',
        name: 'add',
        message: 'Which product would you like to add more of?',
        // validate: validateInput,
        filter: String
      }]).then(function(answers) {
        var addProduct = answers.add;
        if (addProduct == product) {
          console.log("hello");



        }



      })
    
    
  })
}



// * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
function addProduct() {



}