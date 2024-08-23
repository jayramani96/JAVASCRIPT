
// Polymorphism 
// It means the method repeatedly calls as same name.
class Bird{
    speak(){
        console.log("I am an animal!");
    }
}
class Peacock extends Bird{
    speak(){
        return console.log("tehuk tehuk!");
    }
}
let bird = new Peacock();
bird.speak();
let bird2 = new Bird();
bird2.speak();


// Simple inheritance
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return console.log(`Hello, my name is ${this.name} and I am ${this.age}.`);
    }
}
class Person2 extends Person{
    constructor(name, age){
        super(name, age);
        this.greet();
    }
}
let obj = new Person2("Jay", "young");
obj.greet();

// Multilevel inheritance
class first {
    greet(){
        console.log("I am BOY!");
    }
}
class second extends first {
    treat(){
        console.log("I am BOY2!");
    }
}
class third extends second {
    speak(){
        console.log("I am BOY3!");
    }
}
let obj1 = new third();
obj1.greet();
obj1.treat();
obj1.speak();

// Hierarchical inheritance
class One {
    greet(){
        console.log('Hello, I am a Inteligent!');
    }
}
class Two extends One {
    treat(){
        console.log('I am treating someone!');
    }
}
class Three extends One {
    speak(){
        console.log('I am speaking!');
    }
}
let obj2 = new Three();
obj2.greet();
obj2.speak();
let obj3 = new Two();
obj3.treat();

// Abstraction
// It means Direct output show hides the background process.
// for example parent hide the affects of children.


// Encapsulation
// Hide the data.

// Default Constructor
class Product{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}
let product = new Product("Birds", "This is a Birds.");
console.log(product.name);
console.log(product.description);


// Perameterized Constructor
class Product2{
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
    info(){
        console.log(`Name: ${this.name}, Description: ${this.description}, Price: ${this.price}`);
    }
}
let product2 = new Product2("Headphone", "This is a Headphone.", 15000);
product2.info();

// Copy Constructor
class Boy{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    copy(){
        return new Person(this.name, this.age);
    }
}
let boy = new Boy("jenil", "21");
let boy2 = boy.copy();
console.log(boy.name);
console.log(boy.age);
console.log(boy2.name);
console.log(boy2.age);




// Conditional Classes
class Vote{
    constructor(age){
        if(age >= 18){
            this.vote();
        }else{
            this.notVote();
        }
    }
    vote(){
        console.log("You can vote!");
    }
    notVote(){
        console.log("You can't vote!");
    }
}
let object = new Vote(25);