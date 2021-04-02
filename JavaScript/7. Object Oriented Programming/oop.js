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