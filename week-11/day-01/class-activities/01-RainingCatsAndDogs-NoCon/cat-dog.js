// Always capitalize the name of an object
function Animal(raining, noise){
    // The "constructing":
    this.raining = raining;
    this.noise =  noise;
    this.makeNoise = function() {
        if(this.raining) {
            console.log(this.noise);
        }
    }
}
// How we create multiple instances of an object
var dog = new Animal(true, "Woof!");
var cat = new Animal(false, "Meow!");

dog.makeNoise();
cat.raining = true;
cat.makeNoise();
