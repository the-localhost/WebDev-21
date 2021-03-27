/** REGULAR EXPRESSIONS
 *  > Regular expressions are used in programming languages to match parts of strings
 *  > we create patterns to help us do that matching
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
 *  > allows us to define a group of characters we wish to match by placing them inside [ and ] using -
 */
let myStr = "big bag bug bog";  // we don't want to match bog
let regex = /b[aiu]g/g;
let result = myStr.match(regex);    // ["big", "bag", "bug"]

// defining a range inside character set (or character class)
let myStr = "cat bat mat";
let regex = /[a-e]at/g;
let result = myStr.match(regex);

// using hyphen (-) to define number range
let result = 'hello123456789'.match(/[0-6]/g);  // ["1", "2", "3", "4", "5", "6"]

// combining range of letters and numbers in a single character set
let myStr = "Blueberry 3.141592653s are delicious.";
let regex = /[h-s2-6]/gi;
let result = myStr.match(regex);

/** Negated Character Sets
 *  > a set of characters that we do not want to match
 *  > place a caret character (^) after the opening bracket and before the characters we don't want to match
 *  > for example, /[^aeiou]/gi matches all characters that are not a vowel (symbols also matched)
*/
let myStr = "3 blind mice.";
let regex = /[^0-9aeiou]/gi; 
let result = myStr.match(regex);

// matching characters which appear one or more times consecutively using + (plus)
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);

// matching characters that occur zero or more times using * (asterisk)
let myStr = "gooooooooal";
let regex = /go*/;      // here * applies only to 'o' and not to 'go'
let result = myStr.match(regex);        //  ["goooooooo"]

/** types of pattern matching
 *  1) greedy : finds the longest possible part of a string that fits the regex pattern; default
 *  2) lazy :  finds the smallest possible part of the string that satisfies the regex pattern; use ? character
 */

// finding match with lazy matching
let myStr = 'titanic';
let defaultRegex = /t[a-z]*i/;
let lazyRegex = /t[a-z]*?i/;
let result1 = myStr.match(defaultRegex);    // ["titani"]
let result2 = myStr.match(lazyRegex);       // ["ti"]

/** matching beginning string patterns
 *  > caret (^) is used to at the starting of the regex
*/
let firstString = "Ricky is first and can be found."; 
let firstRegex = /^Ricky/; 
firstRegex.test(firstString);       // true
let notFirst = "You can't find Ricky now."; 
firstRegex.test(notFirst);          // false

/** matching ending string patterns
 *  > dollar/anchor sign ($) is used at the end of the regex
*/
let theEnding = "This is a never ending story"; 
let storyRegex = /story$/; 
storyRegex.test(theEnding);         // true
let noEnding = "Sometimes a story will have to end"; 
storyRegex.test(noEnding);          // false

/** Shorthand Character Classes
 *  > shortcut versions of most common character classes
 *  \w  <->  [a-zA-z0-9_]      (lower,upper,number,underscore)
 *  \W  <->  [^A-Za-z0-9_]     (opposite of \w)
 *  \d  <->  [0-9]             (single character of any number) 
 *  \D  <->  [^0-9]            (all non-numbers)
*/
let longHand = /[A-Za-z0-9_]+/; 
let shortHand = /\w+/; 
let numbers = "42"; 
let varNames = "important_var"; 
longHand.test(numbers);     // true
shortHand.test(numbers);    // true
longHand.test(varNames);    // true
shortHand.test(varNames);   // true

// matching everything but numbers and letters
let shortHand = /\W/; 
let numbers = "42%"; 
let sentence = "Coding!"; 
numbers.match(shortHand);   // ["%"]
sentence.match(shortHand);  // ["!"]

// matching all numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

// matching all non-numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

// matching whitespace using \s
// similar to [ \r\t\n\f\v]
let whiteSpace = "Whitespace. Whitespace everywhere!" 
let spaceRegex = /\s/g; 
let result = whiteSpace.match(spaceRegex);  // [" ", " "]

// matching everything except whitespace using \S
// similar to [^ \r\t\n\f\v]
let whiteSpace = "Whitespace. Whitespace everywhere!" 
let spaceRegex = /\s/g; 
let result = whiteSpace.match(spaceRegex).length;  // 32

/** specifying upper and lower number of matches 
 *  > to match a certain range of patterns
 *  > specified with quantity specifiers { and }
 *  > {lower_bound, upper_bound}
*/
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);     // true
multipleA.test(A2);     // false

// specifying only the lower number of matches
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A2);     // false
multipleA.test(A100);   // true

// specifying exact number of matches
let A4 = "haah";
let A3 = "haaah";
let A100 = "haaaah";
let multipleHA = /ha{3}h/;
multipleHA.test(A2);        // false
multipleHA.test(A3);        // true
multipleHA.test(A4);        // false

/** checking for all or none with ?
 *  > to check possible existence of an element
 *  > checks for zero or one of the preceding element
*/
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);        // true
rainbowRegex.test(british);         // true

/** positive and negative lookaheads
 *  > Lookahead: pattern that tells JS to look-ahead in string to check for pattern further along
 *  > +ve lookahead: makes sure that element in the search pattern is there, but won't actually match it;(?=...)
 *  > -ve lookahead: makes sure the element in the search pattern is not there; (?!...) where ... is pattern
*/
// matches 3-6 characters with two consecutive digits
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D+\d{2})/; 
let result = pwRegex.test(sampleWord);

// checking for mixed grouping of characters using ()
let testStr1 = "Pumpkin";
let testStr2 = "Penguin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr1);       // true
testRegex.test(testStr2);       // true

/** reusing patterns using capture groups
 *  > useful when search patterns occur multiple times
 *  > create capture groups using () and use \ and a number
 *  > number starts with 1 and \n specifies where repeat string will appear
*/
let repeatNum1 = "42 42 42";
let repeatNum2 = "42 42 43";
let repeatNum3 = "42 42 42 42";
let reRegex = /^(\d+)\s\1\s\1/$;
let result1 = reRegex.test(repeatNum1);     // true
let result2 = reRegex.test(repeatNum2);     // false
let result3 = reRegex.test(repeatNum3);     // false

/** Searching and Replacing text in a string
 *  > .replace() is used to search and replace text in a string
 *  > two arguments:
 *       1st: regex pattern we want to search for 
 *       2nd: string to replace the match or a fn to do something
*/
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");     // "The sky is blue."

/** Accessing capture groups in replacement strings
 *  > using dollar signs with group numbers
*/
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);    "three two one"

// removing whitespace from start and end
// Note: this can be achieved using String.prototype.trim() method
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)([\w]+,\s[\w]+!)(\s+)$/;
let result = hello.replace(wsRegex, "$2");      // "Hello World!"