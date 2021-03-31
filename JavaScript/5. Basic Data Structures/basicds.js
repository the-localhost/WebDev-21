/** Data Structures
 *  > multiple ways to store and access data
*/

////// ARRAYS //////

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

/** iterating through an array's all items using for loop
 *  > JS offers different built-in methods: every(), forEach(), map(), etc.
 *  > the most flexible technique which offers us the greatest amount of control is a simple for loop
*/
function filteredArray(arr, elem) {     // removes all nested arrays in arr with elem present in it
    let newArr = [];
    for(let i=0; i<arr.length; i++){
      let curr = arr[i];
      if(curr.indexOf(elem)==-1)
      newArr.push(curr);
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// creating complex multi-dimensional arrays
// arrays can contain an infinite depth of arrays that can contain other arrays
let myNestedArray = [
    ['iterate', 1.3849, 7, '8.4876', ['deep', ['deeper', ['deepest']]], 'depth']
];


////// OBJECTS //////

/** adding key-value pairs to js objects
 *  > objects are pieces of data (values) mapped to unique identifiers called properties (keys)
 *  > to add an additional property, use dot notation or bracket notation
*/
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};
tekkenCharacter.origin = 'South Korea';
tekkenCharacter['hair color'] = 'dyed orange';      // property name with space
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';                    // property name using variable
console.log(tekkenCharacter);

/** modifying an object nested within an object
 *  > object properties can be nested to an arbitrary depth
 *  > the values can be any type of data, including arrays and other objects
 *  > chain the dot/bracket notations to refer the property to be modified
*/
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);

/** accessing property names with bracket notation
 *  > when object properties are not known before runtime or we need to access them in a more dynamic way
*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
function checkInventory(scannedItem) {      // scannedItem may not be known before runtime
return foods[scannedItem];
}
console.log(checkInventory("apples"));      // 25

/** removing object properties using delete keyword
 *  > objects provide a flexible, intuitive way to structure data, AND very fast lookup time
 *  > 
*/ 
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);     // { apples: 25, bananas: 13, grapes: 35 }

/** checking if an object has a property
 *  > Two ways: 
 *      > hasOwnProperty() method
 *      > using the keyword 'in'
*/
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};
function isEveryoneHere(obj) {
    let alan = obj.hasOwnProperty('Alan');
    let jeff = obj.hasOwnProperty('Jeff');
    let sarah = 'Sarah' in obj;                 // using 'in' keyword
    let ryan = 'Ryan' in obj;
    let allPresent = alan && jeff && sarah && ryan;
    return allPresent;
}
console.log(isEveryoneHere(users));     // true

/** iterating through the keys of an object
 *  > done using for...in statement of javascript
 *  > NOTE: Objects do not maintain an ordering to stored keys like arrays do
*/
function countOnline(usersObj) {
    var onlineUsers = 0;
    for(let user in usersObj){
      if(usersObj[user].online==true){
        onlineUsers++;
      }
    }
    return onlineUsers;
}
let users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}
console.log(countOnline(users));    // 1

/** generating an array of all object keys with Object.keys()
 *  > there will be no specific order to the entries in the array
*/
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
console.log(getArrayOfUsers(users));

// modifying an array stored in an object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
};  
function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}
console.log(addFriend(user, 'Pete'));