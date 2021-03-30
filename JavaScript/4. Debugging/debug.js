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

/** catching off by one errors (OBOEs) when indexing
 *  > when we try to get specific index of a string/array
 *  > and give index as length of that string/array, while looping or otherwise
 *  > this may throw 'index out of range' reference error or may print undefined.
 *  > may also occur while using array/string methods
*/
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {        // error at i==len
    console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {         // missed value at i=0
    console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {         // correct
    console.log(alphabet[k]);
}

/** using caution when reinitializing variables inside a loop
 *  > when variables either should be reinitialized, and aren't, or vice versa
 *  > we may accidentally reset the variable being used for the terminal condition, causing an infinite loop
 */
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);

/** preventing infinite loops with a valid terminal condition
 *  > terminal condition tells the program when to break out of the loop code
 *  > loop runs infinitely if terminal condition is not reached, crashing/freezing the browser
*/
function myFunc() {
    for (let i = 1; i != 4; i += 2) {
      console.log("Still going!");
    }
}