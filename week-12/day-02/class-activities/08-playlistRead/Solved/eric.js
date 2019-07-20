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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs();
  //queryDanceSongs();
  insertNewSong();
  //updateSong();
  //deleteSong();
});

function deleteSong() {
  connection.query("DELETE FROM songs WHERE title = 'Coconut Tree'", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function updateSong() {
  connection.query("UPDATE songs SET artist = 'Toby Keith', genre = 'Country' where title = 'Red Solo Cup'", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function insertNewSong() {
  connection.query("INSERT INTO songs (title, artist, genre) VALUES ('cocunut tree', 'shakira', '')", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Latin Pop"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  console.log(query.sql);
}
