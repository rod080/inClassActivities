var fs = require("fs");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "@Dolphin080",
    database: "top_songsdb"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllSongs();
    //queryDanceSongs();
    // insertNewSong();
    //updateSong();
    //deleteSong();
  });

  function queryAllSongs() {
    connection.query("SELECT * FROM Top5000 WHERE artist = 'Bing Crosby'" , function(err, res) {
      if (err) throw err;
      console.log(res);
    //   connection.end(); hmmm what does this line do?
    });
  }

// ---------rubens code for 3----------
function afterConnection() {
    connection.query("SELECT * FROM top5000 WHERE id>=50 and id<=100  ", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  }






  function queryAllSongs() {
    connection.query("SELECT * FROM Top5000 WHERE artist = 'Bing Crosby'" , function(err, res) {
      if (err) throw err;
      console.log(res);
    //   console.log(res.artist)
  
      connection.end();
    });
  }