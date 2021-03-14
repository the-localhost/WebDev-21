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

// finding first character of a string using bracket notation
var myString = "Hello World!";
var firstCharacter = myString[0];

/**
 * String Immutability:
 * ```````````````````
 *          var myString = "Jello!";
 * 
 * In JS, strings are immutable. So, the folloeing code snippet will throw an error:
 *          myString[0] = "H";
 * While, we can't modify string literals, we can reassign new literals to string variables.
 * So, the following code is the correct way:
 *          myString = "Hello";
 */

// finding nth character in a string using bracket notation (n < length of string)
var myString = "Hello";
var n = 2;
var nthCharacter = myString[n-1];

// finding last character in a string using bracket notation
var myString = "Hello World!";
var lastCharacter = myString[myString.length-1];

// finding nth-to-last character in a string (n < length of string)
var myString = "Welcome friends.";
var n = 3;
var nthToLastChar = myString[myString.length-n];

// Word Blanks (simple excercise with strings)
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "My " + myNoun + " is " + myAdjective + ", so he " + myVerb + " " + myAdverb + ".";

// storing mutiple values using arrays
var myList = ["HTML", "CSS", "JS"];

// nesting one array into another array
var myNestedArray = [["Jazz", "Pop", "EDM"], ["Classical", "Indie", "Sufi"]];

// accessing array data using indices
var myArray = ["Jack", "Lily", "Alex"];
var winner = myArray[1];

// modifying array data using indices (allowed in arrays unlike strings)
var myArray = [20, 30, 60, 50];
myArray[2] = 40;

// accessing multi-dimensional arrays with indices
var myArray = [["Mike",2], ["Tyke", 3]];
var maxNumber = myArray[1][1];

// appending data to the end of array
var myArray = ["Tia", "Mia", "Sia"];
myArray.push("Dia");

// popping a value off of the end of an array
var myArray = ["Tia", "Mia", "Sia"];
myArray.pop();

// popping and storing the value
var poppedValue = myArray.pop();

// removing first element of the array
var myArray = ["Tia", "Mia", "Sia"];
myArray.shift();

// adding elements in front of the array
var myArray = ["Tia", "Mia", "Sia"];
myArray.unshift("Dia");

// creating a 2-dimensional array
var myShoppingList = [
    ["Chocolate", 5],
    ["Cookies", 2],
    ["Nuts", 10],
    ["Candies", 2],
    ["Pastries", 10]
];

// writing reusable code using functions
function sayHello() {
    // prints quoted text on console screen
    console.log("Hello dear."); 
}
sayHello();     // calling the function

// passing values to functions with arguments
function functionWithArgs(param1, param2) {
    console.log(param1, param2);
}
functionWithArgs("Hello", "World!");
functionWithArgs("You're", "welcome.");

/** GLOBAL SCOPE VARIABLES
 *  Global variable: They are visible everywhere in the JS code.
 *  > variables defined outside of a function block
 *  > variables used without the var keyword (anywhere)
 */
var globalVariable = 10;
function fun1() {
  anotherGlobal = 5;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

/** LOCAL SCOPE VARIABLES
 *  Local variable: Only visible within the function in which variable is defined 
 */
function myLocalScope() {
    var myLocalVar = "hello";
    console.log('inside myLocalScope', myLocalVar);
}
myLocalScope();
console.log('outside myLocalScope', myLocalVar);

// Local variable will take precedence over global variable with same name
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}

// returning a value from a function
function plusThree(num) {
    return num + 3;
}
var answer = plusThree(5);

// the return type is undefined for function w/o return statement
function addThree(num) {
    num = num+3;
}
console.log(addThree(num));

// assigning with a returned value
function add(num1, num2) {
    return num1+num2;
}
var sum = add(3, 5);

// creating queue function using array
function standInLine(arr, item) {
    arr.push(item);
    item=arr.shift();
    return item;
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/** BOOLEAN DATATYPE
 *  Booleans may only be one of two values: true or false.
 *  > basically little on-off switches, where true is on and false is off
 *  > strings "true" and "false" are not Boolean and have no special meaning
 */

// conditional logics with if statements
/** pseudo code
 * if (condition is true) {
 *   statement is executed
 * }
 */
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true";
    } 
    return "No, that was false";
}

/** EQUALITY OPERATOR (==)
 *  compares two values and returns true if they're equivalent or false if they are not
 *  > to compare two different datatypes (for example, numbers and string)
 *    JS converts one type to another (Type Coercion). Example:
 *      1   ==  1       true
 *      1   ==  2       false
 *      1   == '1'      true
 *      "3" ==  3       true
 */

/**
 * STRICT EQUALITY OPERATOR (===)
 * unlike the equality operator, the strict equality operator does not perform a type conversion
 * > returns false if the values being compared have different data types
 * > Examples:
 *      3 === 3         true
 *      3 === '3'       false
 */

// determining type of variable/value with typeof
var myVar = "3";
console.log(typeof myVar)

/** INEQUALITY OPERATOR (!=)
 *  returns false where equality would return true and vice versa
 *  > converts data types of values while comparing
 */
function testNotEqual(val) {
    if (val!=99) { 
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

// comparison using STRICT INEQUALITY OPERATOR (!==)
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
 }
testStrictNotEqual("17");

// comparison with the greater than operator (>)
// datatype conversion occurs during comparison
function testGreaterThan(val) {
    if (val>100) {  
      return "Over 100";
    }
    if (val>10) {  
      return "Over 10";
    }
    return "10 or Under";
}
 testGreaterThan(10);

 // comparison with greater than or equal to (>=)
 function testGreaterOrEqual(val) {
    if (val>=20) {  
      return "20 or Over";
    }
    if (val>=10) {  
      return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);

// comparison with the less than operator (<)
// datatype conversion occurs during comparison
function testLessThan(val) {
    if (val<25) {  
      return "Under 25";
    }
    if (val<55) { 
      return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);

// comparison with less than or equal to (<=)
function testLessOrEqual(val) {
    if (val<=12) {  
      return "Smaller Than or Equal to 12";
    }
    if (val<=24) {  
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);

/** Logical AND operator (&&)
 *  returns true if and only if the operands to the left and right of it are true
 */
function testLogicalAnd(val) {
    if (val<=50 && val>=25) {
      return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

/** Logical OR operator (||)
 *  returns true if either of the operands is true, else retuens false
 */
function testLogicalOr(val) {
    if (val<10 || val>20) {
      return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);

/** ELSE STATEMENTS
 *  used to execute alternate code in case the condition of if statement is false
 */
function testElse(val) {
    var result = "";
    if (val > 5) {
      result = "Bigger than 5";
    } else{
      result = "5 or Smaller";
    }
    return result;
}
testElse(4);

/** ELSE IF STATEMENTS
 *  to address multiple conditions by chahining if statements with else if statements
 */
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if (val < 5) {
      return "Smaller than 5";
    } else{
      return "Between 5 and 10";
    }
}
testElseIf(7);

// logical order of else if statements is important; if changed, can change output
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
}
orderMyLogic(7);

// if/else statements can be chained together for complex logic; pseudocode:
if (condition1) {
    statement1
} else if (condition2) {
    statement2
} else if (condition3) {
    statement3
//. . .
} else {
    statementN
}

// GOLF CODE using nested if else statements
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes==1) {
    return names[0];
  } else if (strokes<=par-2) {
    return names[1];
  } else if (strokes==par-1) {
    return names[2];
  } else if (strokes==par) {
    return names[3];
  } else if (strokes==par+1) {
    return names[4];
  } else if (strokes==par+2) {
    return names[5];
  } else {
    return names[6];
  }
}
golfScore(5, 4);

/** SWITCH STATEMENTS
 *  used to choose from many options
 *  > tests a value and can have many case statements which define various possible values
 *  > statements are executed from the first matched case value until a break is encountered
 *  > case values are tested with strict equality (===).
 *  > 'break' tells JS to stop executing statements. If omitted, the next statements will be executed
 */
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case 1:
        answer="alpha";
        break;
      case 2:
        answer="beta";
        break;
      case 3:
        answer="gamma";
        break;
      case 4:
        answer="delta";
    }
    return answer;
}
caseInSwitch(1);

// adding a 'default' option in switch statements
// executed if no matching case statements are found
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
//...
  default:
    defaultStatement;
    break;
}

// multiple identical options in switch statements
// if we have multiple inputs with same outputs
var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

// returning boolean values from the functions
function isEqual(a, b){
  return a===b;
}

// if return statement is reached, the code following it is not executed
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

// Card Counting game : https://en.wikipedia.org/wiki/Card_counting
var count = 0;
var ans="";
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count>0) ans = count+" "+"Bet";
  else ans = count+" "+"Hold";
  return ans;
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

/** JavaScript Objects:
 *  > useful for storing data in a structured way
 *  > can represent real world objects
 *  > data is accessed through properties
 * NOTE: property name can be numbers.
 * JS will automatically typecast non-string properties as strings.
 */
 var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

// accessing object properties using dot notation
// used when we know the name of the property we're trying to access, ahead of time
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1;
var prop2val = myObj.prop2;

// accessing object properties using bracket notation
// needed especially when the property name has a space in it; can be used otherwise too
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

// accessing object properties using variables
// this can be done only using bracket notation 
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);

// updating object properties using dot/bracket notation
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.name="Campy";
ourDog["friends"]=["everything but cats"];

// adding new properties to the JS object
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "bow-wow";

// deleting properties from a JS object
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
delete ourDog.bark;

// using objects for lookups
// objects can be thought of as a key/value storage
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank",
  };
  result=lookup[val];
  return result;
}
phoneticLookup("charlie");

// testing objects for properties
// .hasOwnProperty(propname) : returns true if the property is found else false
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

// manipulating complex data
// A JavaScript object is one way to handle flexible data
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];