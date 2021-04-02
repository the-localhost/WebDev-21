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