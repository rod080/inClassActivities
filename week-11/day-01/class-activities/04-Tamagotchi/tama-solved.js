// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create digital pet object
function DigitalPet() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function() {
        if(this.hungry) {
            console.log("Thanks! I was starving");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks, not hungry");
        }
    };
    this.sleep = function() {
        if(this.sleepy) {
            console.log("Sounds great, nap time");
            this.sleepy = false;
            this.increaseAge();
        } else {
            console.log("I'm not tired!")
        }
    };
    this.increaseAge = function() {
        this.age++;
        console.log("I've grown to " + this.age);
    };
    this.play = function() {
        if(this.bored) {
            console.log("hooray I was bored");
            this.hungry = true;
        } else {
            console.log("No thanks I have stuff to do");
        }
    }
}

// Create new DigitalPet
var dog = new DigitalPet();

// Assign properties and methods on the fly
dog.outside = false;
dog.bark = function () {
    console.log("woof!");
};
dog.goOutside = function()  {
    if(this.outside) {
        console.log("Already outside!");
    } else {
        console.log("Yay!");
        this.bark();
        this.outside = true;
    }
};
dog.goInside = function() {
    if(this.outside) {
        console.log("Fine!");
        this.outside = false;
    } else {
        console.log("Already outside bro");
    }
}

// Create a new instance of the digital pet object
var cat = new DigitalPet();

// TODO: Fill-in with cat methods and properties

showIntro();

// TODO: Give people the option to select cat or dog
function showIntro(){
    console.log("    ____    ");
    console.log("   /    \\   ");
    console.log("   | . .|   ");
    console.log("    \\ u /   ");
    console.log("   +=|||=+   ");
    console.log("    /   \\    ");
    showMenu();
}

// TODO: Show dog/cat specific questions
function showMenu() {
    inquirer.prompt([
        {
        type: "list",
        message: "Which do you want to do?",
        choices: ["Feed", "Play", "Sleep"],
        name: "action"
        }
    ])
    .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    console.log(inquirerResponse.action);
    switch(inquirerResponse.action) {
        case "Feed":
            dog.feed();
            break;
        case "Play":
            dog.play();
            break;
        case "Sleep":
            dog.sleep();
            break;
        default:break;
    }
    showMenu();
  });
}
