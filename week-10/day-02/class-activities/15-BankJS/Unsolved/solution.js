var fs = require("fs");

var action = process.argv[2];
var amount = process.argv[3];

switch(action) {
    case "total":
        total();
        break;
    case "deposit":
            withdrawOrDeposit();
        break;
    case "withdraw":
            withdrawOrDeposit();
        break;
    case "lotto":
        lotto();
        break;
    default:break;
}

function total() {
    fs.readFile("bank.txt", "utf8", function(err, data) {
        if(err) {
            return console.log(err);
        }

        var arr = data.split(",");
        var balance = 0;
        for(var i = 0; i < arr.length; i++) {
            balance += parseFloat(arr[i].trim());
        }
        console.log(balance);
    });
}

function withdrawOrDeposit() {
    var updatedAmount = "";
    if(action == "withdraw") {
            updatedAmount = ", -" + amount;
    } else {
        updatedAmount = ", " + amount;
    }
    fs.appendFile("bank.txt", updatedAmount, function(err) {
        if(err) {
            return console.log(err);
        }
    });
}

function lotto() {
    var updatedAmount = "";
    var randomNumber = Math.floor(Math.random() * 10);
    if (parseInt(amount) == randomNumber) {
        updatedAmount = ", " + parseFloat(amount) * 2;
    } else {
        updatedAmount = ", -" + amount;
    }

    fs.appendFile("bank.txt", updatedAmount, function(err) {
        if(err) {
            return console.log(err);
        }
    });
}