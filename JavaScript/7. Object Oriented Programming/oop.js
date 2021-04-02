/** Object Oriented Programmming
 *  > OOP is a paradigm where we try to mimic real world objects for software development
*/

/** OBJECT
 *  > tangible things people can observe and interact with
 *  > properties: quality of object; eg: bird has wings
 *  > methods: behaviour of object; eg: bird sings
*/
let dog = {
    name : "tommy",
    numLegs : 4
};

// accessing properties of an object using dot notation
let dog = {
    name: "Spot",
    numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);

// creating a method on an object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => `This dog has ${dog.numLegs} legs.`
};
console.log(dog.sayLegs());     // This dog has 4 legs.

// making above code more reusable using 'this' keyword
// this refers to the object that the method is associated with
// if variable name changes, it's references has to be changed too
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => `This dog has ${this.numLegs} legs.`
};
console.log(dog.sayLegs());     // This dog has 4 legs.

/** CONSTRUCTOR FUNCTION
 *  > functions that create new objects
 *  > define properties and behaviors that will belong to the new object
 *  > defined with a capitalized name to distinguish them from non-constructor fns
 *  > use the keyword 'this' to set properties of the object they will create
 *  > define properties and behaviors instead of returning a value
 *  NOTE: 'this' inside the constructor always refers to the object being created.
*/
function Dog() {
    this.name = "Tommy";
    this.color = "Black";
    this.numLegs = 4;
}

/** using a constructor to create objects
 *  > the 'new' operator is used when calling a constructor
 *  > w/o 'new' operator, 'this' inside constructor would not point to newly created object, giving unexpected results
*/
let hound = new Dog();

// extending constructors to recieve arguments
function Dog(name, color) {
    this.name = name;
    this.color=color;
    this.numLegs = 4;
}
let terrier = new Dog("tommy", "black");
console.log(terrier);       // { name: 'tommy', color: 'black', numLegs: 4 }

/** verifying an object's constructor using instanceof
 *  > instanceof allows us to compare an object to a constructor
 *  > returns true if that object was created with the constructor else false
 *  > if an object is created without using a constructor, instanceof returns false
*/
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);                 // using constructor
console.log(myHouse instanceof House);      // true
//////////////////
let myNewHouse = {                          // w/o using constructor
    numBedrooms : 7
}
console.log(myNewHouse instanceof House);   //false

/** OWN PROPERTIES
 *  > defined directly on the instance object
 *  > the instantiated objects will have their own separate copy of these properties
*/
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for(let prop in canary){
    if(canary.hasOwnProperty(prop)){
        ownProps.push(prop);
    }
}
console.log(ownProps);              // [ 'name', 'numLegs' ]

/** using Prototype Properties to reduce duplicate code
 *  > used when we have a duplicated variable; eg: numLegs in above Bird class
 *  > prototype properties are shared among ALL instances
 *  > the proptype properties are part of their constructors
 *  > nearly every object in JS has a prototype property which is part of the constructor fn that created it
*/
function Dog(name) {
    this.name = name;           // own property
}
Dog.prototype.numLegs = 4;      // prototype property
let beagle = new Dog("Snoopy");
console.log(beagle);            // { name: 'Snoopy' }
console.log(Dog.prototype);     // { numLegs: 4 }

// iterating over all properties
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
for(let prop in beagle){
    if(beagle.hasOwnProperty(prop)){
        ownProps.push(prop);
    }else{
        prototypeProps.push(prop);
    }
}
console.log(ownProps);                  // [ 'name' ]
console.log(prototypeProps);            // [ 'numLegs' ]

/** CONSTRUCTOR PROPERTY
 *  >  a reference to the constructor function that created the instanc
 *  > advantage: to find out what kind of object it is
 *  > NOTE: constructor property can be overwritten; generally better to use the instanceof method
*/
function Dog(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
    if(candidate.constructor==Dog){
        return true;
    }
    return false;
}

// changing the prototype to a new object
// helpful when no of prototype properties increase greatly and ading props become tedious
// the object contains all the reqd. props and adds them efficiently
function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
}

/** setting the constructor property when changing the prototype
 *  > manually setting the protoype erases the constructor of "new objects"
 *  > new objects mean objects initiated after changing prototype
*/
function Dog(name) {
    this.name = name;
}
let sweetie = new Dog("Coffee");        // created before changing prototype
Dog.prototype = {
  //constructor: Dog,                   // uncomment this line to set the constructor for tom as Dog
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};
let tom = new Dog("Tommy");                     // created after changing prototype
console.log(tom.constructor === Dog);           // false
console.log(tom.constructor === Object);        // true
console.log(tom instanceof Dog);                // true
console.log(tom.constructor)                    // [Function: Object]
console.log(sweetie.constructor)                // [Function: Dog]

/** where an object's prototype comes from
 *  > an object inherits its prototype directly from the constructor function that created it
 *  > we can show this relationship with the isPrototypeOf method
*/
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
console.log(Dog.prototype.isPrototypeOf(beagle));       // true

/** PROTOTYPE CHAIN
 *  > because a prototype is an object, a prototype can have its own prototype
 *  > hasOwnProperty method is defined in Object.prototype which can be accessed by Dog.prototype
 *      which can then be accessed by beagle
 *  > Dog is a supertype for beagle, Object is a supertype for both Dog and beagle
 *  > Object is a supertype for all JS objects
*/
function Bird(name) {
    this.name = name;
}
console.log(typeof Bird.prototype);        // object
console.log(Object.prototype.isPrototypeOf(Bird.prototype));    // true
///////////
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
console.log(Dog.prototype.isPrototypeOf(beagle));               // true
console.log(Object.prototype.isPrototypeOf(Dog.prototype));     // true

/** using inheritance to avoid repitition
 *  > repeated code is a problem is because any change requires fixing code in multiple places
 *  > In below example, Animal is a supertype for both Cat and Bear
 *  > Instead of repeating eat method two times, it's defined once in Animal
*/
function Cat(name) {
    this.name = name;
}
Cat.prototype = {
    constructor: Cat,
};
function Bear(name) {
    this.name = name;
}
Bear.prototype = {
  constructor: Bear
};
function Animal() { }           // Doubt: How is Animal a superclass of Cat
Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

/** inheritance step 1: make an instance of the supertype (or parent)
 *  > better way :  (Animal is a supertype)
 *          let animal = Object.create(Animal.prototype);
 *  > Object.create(obj) creates a new object, and sets obj as the new object's prototype
*/
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
console.log(duck instanceof Animal);            // true
console.log(beagle instanceof Animal);          // true

/** inheritance step 2: set the child's prototype to an instance of the parent
 *  > by doing this, the prototype of child will have all props of parent
*/
function Animal() { }
Animal.prototype = {
   constructor: Animal,
   eat: function() {
     console.log("nom nom nom");
   }
};
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
beagle.eat();          // beagle inherits all properties of Animal

/** resetting an inherited constructor's property
 *  > when an object inherits its prototype from another object, it also inherits the supertype's constructor property
 *  > to show child's constructor name in constructor property, manually set it
*/
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor);          // [Function: Bird]
console.log(beagle.constructor);        // [Function: Dog]

// adding methods after inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = () => console.log("Woof!");
let beagle = new Dog();

/** overriding inherited methods
 *  > done in same way as defining a new method
 *  > let's say this is order==> Object->Animal->Bird->duck, then JS looks for method in this way:
 *       duck => Is eat() defined here? No.
 *       Bird => Is eat() defined here? => Yes. Execute it and stop searching.
 *       Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
 *       Object => JavaScript stopped searching before reaching this level.
*/
function Animal() { }
Animal.prototype.eat = function() {                 // inherited method
  return "nom nom nom";
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.eat = function() {                   // overriding
  return "peck peck peck";
};

/** using mixin to add common behaviour between unrelated objects
 *  > inheritance does not work well for unrelated objects like Bird and Airplane
 *  > both can fly but Bird is not a type of Airplane and vice versa
 *  > a mixin allows other objects to use a collection of functions
*/
let bird = {
    name: "Donald",
    numLegs: 2
};
let boat = {
    name: "Warrior",
    type: "race-boat"
};
let glideMixin = function(obj){
    obj.glide = function() {
        console.log("I'm gliding!");
    }
}
glideMixin(bird);
glideMixin(boat);
bird.glide();           // I'm gliding! 
boat.glide();           // I'm gliding!