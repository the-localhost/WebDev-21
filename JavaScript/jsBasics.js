// This is an inline-comment

/* This is a multi-line comment.
    We can write multiple lines of comments here 
    I'll be using comments in rest of this file
    to explain what I've written.
*/

// READING INSTRUCTIONS:
// please don't consider the variable declarations in continuous manner
// the names are used only for learning purpose. this is not a working js file
// so, variables of same names are declared mutiple times

// to declare a variable, use 'var' keyword
var myVariable;

// assigning value to variable using '=' (assignment operator)
var myName;
myName = 'localhost';

// assigning one variable's value to another variable
var myName;
myName = 'localhost';
var myUserName = myName;

// initializing variables with assignment operator
var myName = 'localhost';

/**
 * uninitialized variables contains the value undefined.
 * mathematical operators on these variables will result in undefined.
 * string operations will result in undefined string literal (i.e., "undefined")
 */

/**
 * variable names are case sensitive
 * i.e., two variables myName and myname are not same
 * Note: best practice is to use camelCase for naming variables
 */

// adding two numbers 
var mySum = 10 + 2;

// subtract
var myDifference = 10 - 2;

// multiply
var myProduct = 10 * 2;

// divide
var myQuotient = 10 / 2;

// incrementing a number
var myNum = 10;
myNum++;

// decrementing a number
var myNum = 10;
myNum--;

// creating a decimal number
var myDecimal = 10.2;

// multiplying two decimal numbers
var myDecimal1 = 2.2;
var myDecimal2 = 2.0;
var myProduct = myDecimal1 * myDecimal2;

// dividing two decimal numbers
var myDecimal1 = 4.4;
var myDecimal2 = 2.0;
var myProduct = myDecimal1 / myDecimal2;

// finding a remainder
var rem = 11 % 3;

// compound addition using augmented addition
var myNum = 10;
myNum += 2;

// compound subtraction using augmented subtraction
var myNum = 10;
myNum -= 2;

// compound multiplication using augmented multiplication
var myNum = 10;
myNum *= 2;

// compound division using augmented division
var myNum = 10;
myNum /= 2;

// declaring string variables
var myString1 = 'Single quote string';
var myString2 = "Double quote string";

// escaping quotes in the literal string using backslash
var myStringWithQuotes = "He said, \"Hello there.\".";

// quoting string with single quotes (w/o using backslash)
var myString = "Let's do it!";

/**
 * Escape Sequences:
 * 
 * Code	Output
 *  \'	single quote
 *  \"	double quote
 *  \\	backslash
 *  \n	newline
 *  \r	carriage return
 *  \t	tab
 *  \b	word boundary
 *  \f	form feed
 */

// concatenating strings with plus operator
var concatString = "Hello " + "World!";

// concatenating strings with plus equals operator
var concatString = "Hello ";
concatString += "World!";

// constructing strings with variables
var firstName = "Ross";
var greeting = "Good morning, " + firstName + ".";

// appending variables to strings
var feeling = "awesome!";
var sentence = "I'm feeling ";
sentence += feeling;

// finding length of a string
var myString = "I'm awesome.";
var myStringLenght = myString.length;

