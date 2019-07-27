// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var dataArray = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "seanhome.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "copytables.html"));
});

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "copyreserve.html"));
});



app.get("/products", function(req,res){
    res.json({
        name: "hello world"

    })
})


app.post("/userdata", function(req,res){
    // REQ object gives us the user's data
    console.log(req.body);
    dataArray.push(req.body);
    console.log(dataArray);

    // Res sends data back to the client
    res.json({
        name:"",
        Number:"",
        email:"",
        id:""

    })
})


//----------ajax call----------------------


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});





//---------------------georges code---------------------------------------
// var tableDate = require("../data/tableData");
// var waitListData = require("../data/waitinglistdata");

// module.exports = function (app) {

//    app.get("/api/table", function (req, res) {
//        res.jason(tableDate);
//    });

//    app.get("/api/waitinglistdata", function (req, res) {
//        res.jason(waitinglistData);
//    });

//    app.post("/app/table", function (req, res) {
//        if (tableDate.length, 5) {
//            tableDate.push(req.body);
//            res.jason(true);
//        }
//        else {
//            waitListData.push(req.body);
//            res.jason(false);
//        }
//    });

//    app.post("/api/clear", function (req, res) {
//        tableDate.length = 0;
//        waitListData.length = 0;

//        res.jason({ ok: true })
//    });
// };

