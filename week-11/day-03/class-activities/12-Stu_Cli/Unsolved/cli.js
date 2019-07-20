// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
var search = process.argv[2];
var terms = process.argv.slice(3).join(" ");

if(search == "show") {
    console.log("Querying for show");
} else if(search == "actor") {
    console.log("Querying for actor");
} else {
    console.log("Enter something you big dummy");
}

console.log(terms);