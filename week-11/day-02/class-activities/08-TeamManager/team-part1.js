var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.printStats = function() {
        console.log("Name : " + this.name);
        console.log("Position : " + this.position);
        console.log("Offense : " + this.offense);
        console.log("Defense : " + this.defense);
    };
    this.goodGame = function() {
        if(Math.random() >= .5) {
            this.offense++;
        } else {
            this.defense++;
        }
    };
    this.badGame = function() {
        if(Math.random() >= .5) {
            this.offense--;
        } else {
            this.defense--;
        }
    };
}

createPlayers();
var counter = 0;

function createPlayers() {
    
    if(counter < 3) {
        inquirer.prompt([
            {}, // some question
            {} // another question
        ]).then(function(answers) {
            // creating instances of the Player object
            counter++;
            createPlayers();
        });
    }
    
}


