/** DEBUGGING
 *  > going through the code, finding issues and fixing them
 *  > syntax errors; runtime errors; logical errors
 *  > using JS console 
*/

// using JS console to check the value of a variable
// using console.log() at strategic points to show intermediate values
let a = 5;
let b = 1;
a++;
console.log(a);
let sumAB = a + b;
console.log(sumAB);

// using typeof to check the type of variable
// when working with different data types; especially when external data is accessed in JSON form
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

/** catching misspelled variable and function names
 *  > case-sensitive names can be misspelled especially when typing fast
 *  > console tries to find a non-existing object and complains in form of ReferenceError
*/ 
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;      // misspelled variables
console.log(`Net working capital is: ${netWorkingCapital}`);

/** catching unclosed parentheses, brackets, braces or quotes
 *  > best practice:
 *      immediately include closing match, move the cursor back and continue coding
 *  > console can show different errors based on logics; generally include SyntaxError
*/

// mixed usage of single and double quotes
// backslash can be used to escape quotes inside string
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";   // correct
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";      // correct
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';          // incorrect

// assignment operator instead of equality operator
// 'falsy' values: false, 0, "" (an empty string), NaN, undefined, and null
// every value except falsy values evaluate to true
let x = 7;
let y = 9;
let result = "to come";
if(x = y) {         // correct: x == y
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result);

/** missing opening and closing parenthesis after a function call
 *  > forgetting to include () while calling a fn w/ no args 
 *  > this assigns fn reference instead of return value if assigned to a var
 *  > can be debugged by logging var value or its type
*/
function myFunction() {
    return "You rock!";
}
let varOne = myFunction;        // [Function: myFunction]
let varTwo = myFunction();      // You rock!

/** arguments passed in wrong order when calling a function
 *  > if the arguments are of different types, it'll likely throw a runtime error
 *  > if the arguments are of same type, the logic won't make sense
*/
function raiseToPower(b, e) {
    return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);    // correct: raiseToPower(base, exp)

