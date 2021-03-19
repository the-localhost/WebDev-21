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