// ports

var http = require("http");

var port = 7000;
var port2 = 7500;

var arr = ["fist quote", "second quote", "third quote", "fouth quote"];

// first one
function handle(req, res){
    var input = arr[Math.ceil(Math.random() * arr.length )]
    res.end(input + req.url);
}

var server = http.createServer(handle);

server.listen(port, () => {
    console.log("it is working http://localhost:" + port);
})

// second one
function handle2(req, res){
    var input = arr[Math.ceil(Math.random() * arr.length )]
    res.end(input + req.url);
}

var server2 = http.createServer(handle2);

server2.listen(port2, () => {
    console.log("it is working http://localhost:" + port2);
})