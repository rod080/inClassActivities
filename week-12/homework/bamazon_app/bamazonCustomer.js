/*
-install inquirer and require it 
-
 Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)


icecream crude
- need inquirer code 
- need code for communcating to the dabase dom package 
- look at great bay assignment for help
- git clone repository 
- once finished copy code to homewrok codes folder

questions:
mock data?- should I install mock dat generator?

*/

var fs = require("fs");
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",

    // Your password
    password: "@Dolphin080",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // queryAllSongs();
    //queryDanceSongs();
    // insertNewSong();
    //updateSong();
    //deleteSong();
    start();
  });

  function queryAllSongs() {
    connection.query("SELECT * FROM products" , function(err, res) {
      if (err) throw err;
      console.log(res);
    //   connection.end(); hmmm what does this line do?
    });
  }


  function start() {
    queryAllSongs()
    inquirer
      .prompt({
        name: "productID",
        type: "list",
        message: "Would you like to purcahse an item? whats the ID of the prodcut you would like to purchase?",
        input: ["POST", "BID", ""]
        
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        
        if (answer.postOrBid === "POST") {
          inquirer.prompt([

            {
              name: "item",
              type: "input",
              message: "How many would you like to buy?"
            },
            {

            }


          ])

        }
        else if(answer.postOrBid === "BID") {
       
        } else{
          connection.end();
        }
      });
  }


