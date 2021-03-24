/** REGULAR EXPRESSIONS
 *  > Regular expressions are used in programming languages to match parts of strings
 *  > we create patterns to help you do that matching
 *  > quote marks are not required within the regular expression
*/

// .test() method to test a regex
// syntax:      /regex/.test('string');
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);        // true

// matching literal strings
let firstString = "Hi, Kevin";
let secondString = "Hi, kevin";
let regex = /Kevin/;
let firstResult = regex.test(firstString);      // true
let secondResult = regex.test(secondString);    // false

// matching a literal string with different possibilities
// using | operator (OR operator); matches patterns on either side of |
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);      // true

// ignoring case while matching using i flag
let myString = "FrEeWoRkShOp";
let myRegex = /freeworkshop/i;
let result = myRegex.test(myString);           // true

/** extracting matches using .match() method
 *  syntax:     'string'.match(/regex/);
*/
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); 

// extracting all matches using g flag
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;        // i flag used to ignore cases
let result = twinkleStar.match(starRegex);

/** matching anything with wildcard period
 *  > Wildcard character . (dot or period) matches any character
*/
let testStr = "Huh. I'll hug and hum a song in the hut."
let regex = /hu./ig;
let result = testStr.match(regex);  // ["Huh", "hug", "hum", "hut"]

/** Character Class : matching single character with multiple possibilities
 *  > allows us to define a group of characters we wish to match by placing them inside square ([ and ]) brackets
 */
let myStr = "big bag bug bog";  // we don't want to match bog
let regex = /b[aiu]g/g;
let result = myStr.match(regex);    // ["big", "bag", "bug"]

