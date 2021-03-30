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