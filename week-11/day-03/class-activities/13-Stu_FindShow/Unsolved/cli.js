var TV = require("./tv");

// Create a new TV object
var tv = new TV();


var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
//tv.findShow(term);

if (!search) {
  search = "show";
}

if (!term) {
  term = "Andy Griffith";
}

if (search === "show") {
  //console.log("Searching for TV Show");
  tv.findShow(term);
} else {
  //console.log("Searching for TV Actor");
}
