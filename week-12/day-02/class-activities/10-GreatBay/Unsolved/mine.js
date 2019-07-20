/*inquirer npm-- seacr activity that uses this
mysql npm
10
*/


var fs = require("fs");
var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "@Dolphin080",
    database: "playlist_db"
  });
  

  inquirer
  .prompt([
    {
      type: "list",
      name: "whatyouherefor",
      message: "would you like to post or bid",
      choices: ["post","bid"]
     
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  
/*
* If the user selects "POST AN ITEM" they are prompted for an assortment of information regarding the item and then that information is added to the database so that others can bid on it
*/



//erics code
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllSongs();
    //queryDanceSongs();
    insertNewSong();
    //updateSong();
    //deleteSong();
  });



  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
    addObject();
    
  });
  




  function afterConnection() {
    connection.query("SELECT * FROM songs" , function(err, res) {
      if (err) throw err;
      console.log(res);
  
      connection.end();
    });
  }
