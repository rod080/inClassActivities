var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, data) {

    if(err) {
        //return console.log(err);
        console.log(err);
        return;
    }

    var arr = data.split(",");

    for(e in arr) {
        console.log(arr[e]);
    }

    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

});