var express = require("express");
var mysql = require("mysql");
var app = express(); 
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database: "people"
})
app.get("/", (req, res) => {
    res.send("use case cool or attr/something")
})
app.get("/cast", (req, res) => {
    conn.query("SELECT cast.id, cast.people FROM cast", ((err, data) => {
        res.send(data);
    }))
})
app.get("/cool", (req, res) => {
    conn.query("SELECT * from cast order by points desc", ((err, data) => {
        res.send(data);
    }))
})
app.get("/attr/:iss", (req, res) => {
    var attr = req.params.iss;
    conn.query(`SELECT * from cast WHERE att = '${attr}'`, ((err, data) => {
        if (err) {return console.log(err);}
        res.send(data);
    }))
})
app.listen(3000, () => {
    console.log("localhost:3000");
})