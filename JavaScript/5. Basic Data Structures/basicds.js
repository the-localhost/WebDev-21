/** Data Structures
 *  > multiple ways to store and access data
*/

// using an array to store a collection of data
// one-dimensional array: can contain boolean/string/numbers & other valid JS datatypes
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);        // 7

// multi-dimensional array: array containing other arrays/objects
let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
];

// accessing an array's content using bracket notation
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];      // retrieving
ourArray[1] = "not b anymore";      // setting

/** adding items to an array using .push() and .unshift()
 *  > push() : adds elements to the end of an array
 *  > unnshift() : adds elements to the beginning
*/
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');     // ['XIX', 'XX', 'XXI', 'XXII']
romanNumerals.push(twentyThree);        // ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

/** removing items from an array using .pop() and .shift()
 *  > pop() :   removes an element from the end of an array
 *  > shift() :  removes an element from the beginning
 *  Note: neither method takes parameters, and each only allows an array to be modified by a single element at a time
*/
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));  // ['challenge', 'complete']

/** removing items using splice()
 *  > removes any number of consecutive elements from anywhere in an array
 *  > parameters: 
 *      > 1st : represents the index on the array from which to begin removing element
 *      > 2nd :  indicates the number of elements to delete
 *  > modifies the array and returns new array containing deleted elements
*/
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);   // [2, 5, 2, 1]

/** adding items using splice()
 *  > 3rd parameter : comprises of one or more arguments to be inserted at same index as 1st param
*/
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);       // [10, 11, 12, 13, 14, 15]

/** copying array items using slice()
 *  > copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched
 *  > parameters:
 *      > 1st : the index at which to begin extraction (included)
 *      > 2nd : the index at which to stop extraction (excluded)
*/
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(weatherConditions);         // ['rain', 'snow', 'sleet', 'hail', 'clear']
console.log(todaysWeather);             // ['snow', 'sleet']

/** copying array using spread operator
 *  > easily copy all of an array's elements, in order, with a simple and highly readable syntax
*/
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

// combining arrays using spread operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
console.log(spreadOut());       // [ 'learning', 'to', 'code', 'is', 'fun' ]

/** checking for the presence of an element using indexOf()
 *  > quickly and easily check for the presence of an element on an array
 *  >  indexOf() takes an element as a parameter
 *  > returns the position/index of the element or -1 if the element doesn't exist on the array
*/
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates');            // -1
fruits.indexOf('oranges');          // 2
fruits.indexOf('pears');            // 1