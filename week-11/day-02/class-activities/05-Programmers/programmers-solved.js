function Programmer(name, position, age, favLang) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.favLang = favLang;
    this.print = function() {
        console.log("name : " + this.name);
        console.log("position : " + this.position);
        console.log("age : " + this.age);
        console.log("favLang : " + this.favLang);
    };
}

var jamie = new Programmer("Jamie", "student", 22, "Java" );
jamie.print();