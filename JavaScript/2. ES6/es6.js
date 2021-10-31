// let : a variable with the same name can only be declared once
// let+let, var+let, let+var throws error but var+var doesn't
let myDog = "Camper";
let myDog = "Tommy";        //throws SyntaxError

// "use strict"; enables Strict Mode; catches common coding mistakes and "unsafe" actions
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
"use strict";

/* a variable declared with the let keyword inside a block, statement, or expression
    has it's scope limited to that block, statement, or expression. Eg:
    function abc(){
        for(var i=0; i<10; i++){
            ...
        }
        console.log(i);
    }
    The above code is equivalent to...
    function abc(){
        var i;
        for(i=0; i<10; i++){
            ...
        }
        console.log(i);
    }
    Here i, declared with var, has scope even after the loop and prints 10 in console.
    On the other hand, if i is declared with let, it's scope is only inside the loop:
    function abc(){
        for(let i=0; i<10; i++){
            ...
        }
        console.log(i);
    }
    This code will throw ReferenceError
*/

// once a variable is assigned with const, it cannot be reassigned
// has all features of let except that it's read-only
// common practice for naming variables: uppercase letters with underscore
const FAV_PET = "Cats";
FAV_PET = "Dogs";       //throws TypeError

// objects, including arrays & functions, assigned to a variable using const are still mutable
// using the const declaration only prevents reassignment of the variable identifier
const s = [5, 6, 7];
// s = [1, 2, 3];       // will throw TypeError
s[2] = 45;
console.log(s);

// preventing object mutation using Object.freeze()
// throws TypeError in strict mode
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";         // changes rejected
obj.newProp = "Test";       //  without any error
console.log(obj);

// defining functions anonymously
const myFunc = function() {
    const myVar = "value";
    return myVar;
}

// using arrow function syntax to define anonymous fns in ES6
const myFunc = () => {
    const myVar = "value";
    return myVar;
}

// when there is no function body, and only a return value
const myFunc = () => "value";

// arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// if an arrow function has a single parameter
const doubler = item => item * 2;

// setting default parameters for the functions
// parameter recieves default value when no argument is provided
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());

// using the rest parameter with function parameters
// we can give variable no. of arguments
// arguments stored in array can be accessed in the function
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

// rest paramater allows us to apply map(), filter() and reduce() on the parameters array
// eliminating the need to check the args array
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

/** Spread Operator
 *  allows us to expand arrays and other expressions in places where multiple parameters or elements are expected
 *      const arr = [6, 89, 3, 45];
 *      const maximus = Math.max(...arr);
 *      ...arr returns an unpacked array
 *  the spread operator only works in-place, like in an argument to a function or in an array literal
 *      const arr1 = ['Hey', 'Hello'];
 *      const spreaded = ...arr1;   // throws SyntaxError
 *      const arr2 = [...arr1];     // works fine
 *  in simple terms, the spread operator unpacks all contents of an array into a comma-separated list
 */

// using destructuring assignment to extract values from objects in ES6
const user = { name: 'John Doe', age: 34 };
const { name, age } = user;     // in ES5-> const name = user.name; const age = user.age;

// using destructuring assignment to assign variables from objects
const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;  // variables are userName & userAge

// destructuring values from nested objects
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
};
const { johnDoe: { age, email }} = user;
const { johnDoe: { age: userAge, email: userEmail }} = user;    //assigning to variables w/ diff names

// destructuring values from arrays
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

// destructing assignment allows us to choose which values to assign to variables
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

// destructuring assignment with the rest operator to reassign array elements
// Note: The rest element only works correctly as the last variable in the list
// Below code's result is similar to Array.prototype.slice()
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

// destructuring assignment to pass an object as a function's parameters
// below code only sends min and max inside the function instead of whole object
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({max,min}) => (max + min) / 2.0; 

/** TEMPLATE LITERALS
 *  > allows us to create multi-line strings (saves inserting \n within strings)
 *  > allows us to use string interpolation features to create strings
 *  > backticks(`) used instead of quotes(' or ")
 *  > placeholder using ${variable_name} syntax
 */
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);

// Dynamic properties in objects
// To name the property using variables, use square brackets [variable_name]
// we can also use expressions (like 1+2) instead of variable name
// the property name will then be the result (here, 3) of that expression
const name1 = "John";
const name2 = "Will";
const marks = {
    [name1] : 85,
    [name2] : 88
}

// concise object literal declarations using object property shorthand
// eliminates redundancy. eg: older version code
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
// ES6 concise declaration equivalent to above code
const getMousePosition = (x, y) => ({ x, y });

// concise declarative functions with ES6
// removes the need of using keyword function when declaring inside object
// older version code (ES5):
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
};
// concise declaration with ES6
const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
};

/** Class syntax to define a constructor function
 *  > just a syntax; not a full-fledged implementation of OOPs
 *  > The constructor method is a special method for creating and initializing an object created with a class
 *  > the class keyword declares a new function, to which a constructor is added
 *  > This constructor is invoked when 'new' is called to create a new object.
 *  > UpperCamelCase should be used by convention for ES6 class names
 */
var SpaceShuttle = function(targetPlanet){  // ES5 code:
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
// -----------------------------------
class SpaceShuttle {                        // equivalent ES6 code
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');

/** Getters and Setters to control access to an object
 *  > getter - a function to read object's private variable w/o direct access
 *  > setter - a function to modify object's private variable data based on passed value
 *  >  important because they hide internal implementation details
 *  > convention to precede the name of a private variable with an underscore (_)
 */
class Thermostat {
    constructor(temp){      // accepts Fahrenheit value
      var celcius = (5.0/9)*(temp-32);
      this._temp = celcius;
    }
    //getter to return celcius temperature
    get temperature () {
      return this._temp;
    }
    //setter to set celcius temperature
    set temperature(updateTemp){
      this._temp = updateTemp;
    }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

/** creating a module script
 *  to use exporting/importing functionality
 *  > create a script in your HTML document with a type of module
 *      <script type="module" src="filename.js"></script>
*/

// using export to share a code block; named export
// functions and variables can be shared
// a common way:
export const add = (x, y) => {
    return x + y;
}
// another way to achieve same
const add = (x, y) => {
    return x + y;
}
const subtract = (x, y) => {
    return x - y;
}
export {add, subtract};

// reusing js code using import
// import allows us to choose which parts of a file or module to load
import { add, subtract } from './math_functions.js';

// using * to import everything from a file/module
// when we wish to import all of a file's contents in current file
import * as myMathModule from "./math_functions.js";
myMathModule.add(2,3);
myMathModule.subtract(5,3);

/** creating an export fallback using export default
 *  used if only one value is being exported from a file
 *  also used to create a fallback value for a file or module
 *  we can only have one value be a default export in each module or file
 *  cannot use export default with var, let, or const
*/
export default function add(x, y) { //named function (eg.1)
    return x + y;
}
export default function(x, y) {     //anonymous function (eg.2)
    return x + y;
}

// importing a default export
// the imported value is not surrounded by curly braces ({})
import anySuitableName from "./math_functions.js";

/** JavaScript Promise
 *  > used to make a promise to do something, usually asynchronously
 *  > Promise is a constructor function, so new keyword is used to create one
 *  > It takes a function, as its argument, with two parameters - resolve and reject
*/
const myPromise = new Promise((resolve, reject) => {
    //... ...
});

/** completing a promise using resolve and reject
 *  > a promise has 3 states: pending, fulfilled and rejected
 *  > resolve, reject - parameters given to promise argument to add ways to complete promise
 *  > resolve - used when we want our promise to succeed
 *  > reject - used when we want our promise to fail
*/
const myPromise = new Promise((resolve, reject) => {
    if(/*condition here*/) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
});

/** handling a fulfilled promise with then
 *  > 'then' method is executed immediately after the promise is fulfilled with resolve
 *  > 'result' comes from the argument given to the resolve method
*/
myPromise.then(result => {
    // ...
});

/** handling a rejected promise with catch
 *  > 'catch' method is used when out promise has been rejected
 *  > executed immediately after a promise's reject method is called
 *  > error is the argument passed in to the reject method
*/
myPromise.catch(error => {
    // ...
});
