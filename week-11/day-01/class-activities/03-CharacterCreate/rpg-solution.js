function Character(name, profession, gender, age, hitPoints, strength) {
    this.maxHitPoints = 100;
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.hitPoints = hitPoints;
    this.strength = strength;
    this.printStats = function() {
        var arr = Object.values(this).filter(function(val, i, arr) {
            return (typeof val != "function");
        });
        console.log("Stats : " + arr);
        /*
        console.log(this.name);
        console.log(this.profession);
        console.log(this.gender);
        console.log(this.age);
        console.log(this.hitPoints);
        console.log(this.strength);
        */
    };
    this.isAlive = function() {
        if(this.hitPoints > 0) {
            console.log("Alive and well ~ hit points : " + this.hitPoints);
        } else {
            console.log("ded");
        }
    };
    this.attack = function(otherCharacter) {
        this.hitPoints -= otherCharacter.strength;
        console.log(otherCharacter.name + " attacked " + this.name);
        console.log("Ouch ~ hit points : " + this.hitPoints);
    };
    this.levelUp = function() {
        this.age++;
        this.strength += 5;
        this.maxHitPoints += 25;
        this.hitPoints = this.maxHitPoints;
        this.printStats();
    }
}
var eric = new Character("Eric", "ner-do-well", "male", 31, 100, 10);
var tandy = new Character("Tandy", "TA", "male", 22, 100, 99);
eric.printStats();
eric.isAlive();
eric.attack(tandy);
eric.isAlive();
eric.attack(tandy);
eric.isAlive();
tandy.levelUp();