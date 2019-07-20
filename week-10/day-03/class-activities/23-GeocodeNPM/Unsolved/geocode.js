// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "QH8kZFzDD7I627XMFulNkJ2iE0VdH7G9"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);



// Take in the command line arguments
var args = process.argv;
var q = "";


// Build your address as an array or string
for(var i = 2; i < args.length; i++) {
  q += " " + args[i];
}
console.log(q);

// Then use the geocoder object to search the address
geocoder.geocode(q).then(function(err, response) {
  if(err) {
    return console.log(err);
  }

  console.log(JSON.stringify(response));

});