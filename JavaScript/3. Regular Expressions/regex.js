/** REGULAR EXPRESSIONS
 *  > Regular expressions are used in programming languages to match parts of strings
 *  > we create patterns to help you do that matching
 *  > quote marks are not required within the regular expression
*/

// .test() method to test a regex
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);        // true

// matching literal strings
let firstString = "Hi, Kevin";
let secondString = "Hi, kevin";
let regex = /Kevin/;
let firstResult = regex.test(firstString);      // true
let secondResult = regex.test(secondString);    // false