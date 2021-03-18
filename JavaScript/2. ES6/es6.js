// let : a variable with the same name can only be declared once
// let+let, var+let, let+var throws error but var+var doesn't
let myDog = "Camper";
let myDog = "Tommy";        //throws SyntaxError

// "use strict"; enables Strict Mode, which catches common coding mistakes and "unsafe" actions
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

//