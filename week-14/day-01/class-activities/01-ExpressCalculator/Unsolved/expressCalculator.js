// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;





// Routes



// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:num1/:num2", function(req, res) {

  var operation = req.params.operation;
  var num1 =  parseInt(req.params.num1);
  var num2 =  parseInt(req.params.num2);
  
 
  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
  case "+":
    result = num1+num2;
    // Add your logic here. Pun intended.
    break;
  case "subtract":
  case "+":
    result = num1-num2;
    // Subtract logic
    break;
  case "multiply":
  case "*":
    result = num1/num2;
    // Multiply
    break;
  case "divide":
  case "/":
    result = num1/num2;

    // Divide
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
