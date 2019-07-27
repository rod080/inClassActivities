/*Instructions

Using the previous example as a guide, create an app that has two web servers: one that listens on port 7000 and one that listens on port 7500.

Each server will respond with a different inspirational quote of your choosing.

Bonus

Randomly select the quotes from a predefined array.

how to run this?browser



*/

// Require the core Node.js HTTP module
var http = require("http");

// Define a port
var port = 8080;
var port1 = 7000;
var port2 = 7500;
// The code that executes when this web server receives a request
function handleRequest(request, response) {
    response.end("Hit the endpoint - the request worked! - " + request.url);
}

// Create server instance and pass in the requestHandler function
var server = http.createServer(handleRequest);

// Start listening on port 8080
server.listen(port, function() {
    console.log("Server listenting on port " + port);
    console.log("Server listenting on port " + port2);
    console.log("Server listenting on port " + port3);
});



//---------use armandos for correct method---------------

// -----------------another way/stack overflow----------------
function handleRequest(request, response) {
    response.end("Hit the endpoint - the request worked! - " + request.url);
}

// Create server instance and pass in the requestHandler function
var server = http.createServer(handleRequest);

// Start listening on port 8080
server.listen(port, function() {
    console.log("Server listenting on port " + port);
    console.log("Server listenting on port " + port2);
    console.log("Server listenting on port " + port3);
});


// -----------------------stak overflow---------------------
var ports = [7006, 7007, 7008, 7009];
var servers = [];
var s;
function reqHandler(req, res) {
        var serPort=req.headers.host.split(":");
        console.log("PORT:"+serPort[1]);//here i get it using http header.
}
ports.forEach(function(port) {
    s = http.createServer(reqHandler);
    s.listen(port);
    servers.push(s);
});