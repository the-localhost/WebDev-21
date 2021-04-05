/** FUNCTIONAL PROGRAMMING
 *  > approach to develop software in which code is organised into smaller basic functions
*/

/** learn about functional programming
 *  > INPUT -> PROCESS -> OUTPUT
 *  > isolated pure functions with limited side effects
*/
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);     // 40 cups of tea

/** functional programming terminology
 *  > Callbacks: functions that are passed into another function to decide the invocation of that function
 *  > First class fns: that can be assigned to a variable, passed into another fn, or returned from another fn just like any other normal value
 *      Note: In JS, all fns are first class fns.
 *  > Higher order fns:  that take a fn as an argument, or return a fn as a return value
 *  > Lambda: fns which gets passed in or returned by other fns
*/
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

/** hazards of using using imperative code
 *  > imperative style in programming gives computer a set of statements to perform a task
 *  > functional programming is declarative; we tell computer what we want done by calling methods/functions
 *  > JS offers many predefined methods that handle common tasks (eg.: map to iterate array)
 *  > below method fails as splice changes the original array
*/
function removeNthElement(arr, n){
    var arr1 = arr.splice(0,n);     // elements before nth element
    var arr2 = arr.splice(n+1);     // elements after nth element; WRONG!
    return arr1.concat(arr2);
}

/** avoiding mutations and side effects using functional programming
 *  > one of the core priciple of func. prog. is to not change things; changes lead to bugs
 *  > in func prog, changing/altering things is called Mutation; outcome is called a Side Effect
 *  > pure functions:  it does not cause any side effects
*/
var fixedValue = 4;             // global variable
function incrementer () {       // returns fixedValue incremented by 1 w/o changing it
    return fixedValue+1;
}

/** passing arguments to avoid external dependence in a function
 *  > another principle of func. prog. is to always declare dependencies explicitly
 *  > if fn depends on a var/object being present, pass that variable/object directly into the function as argument
 *  > the fn is easier to test; we know exactly what input it takes; it won't depend on anything else in our program
 *  > the fn would always produce same output for same set of inputs, no matter what part of code executes it
*/
var fixedValue = 4;                           
function incrementer (val) {        // dependency declared clearly
  return val+1;
}

// refactoring global variables out of the functions
// by introducing appropriate parameter and passing global variables
/** var newArr = arrVar; simply creates a reference to the existing variable and not a copy
 *  changing a value in newArr would change the value in arrVar
*/

/** using the MAP method to extract data from an array
 *  > The map method
 *      -  iterates over each item in an array
 *      - returns a new array containing the results of calling the callback fn on each element
 *      - without mutating the original array
 *  > When the callback is used, it is passed three arguments:
 *      - 1st : the current element being processed
 *      - 2nd : the index of that element
 *      - 3rd : the array upon which the map method was called
*/
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const names = users.map(user => user.name);
console.log(names);     // [ 'John', 'Amy', 'camperCat' ]

/** returning an object using the arrow function
 *    > consider we need to return an object in map function, with title 
 *          const abc = xyz.map(entry => {title:entry.title});
 *      this will return syntax error. Reason:
 *        - if we use braces right after the arrow of an arrow function, we are actually starting a new code block instead of returning an object literal
 *      SO, the correct code for above purpose will be:
 *          const abc = xyz.map(entry => {
 *                        return {title:entry.title};
 *                      });
*/

/** implementing map on a prototype
 *  > .map() is a pure function
 *  > below is the implementation of myMap() method which behaves exactly same as .map() method
 *  > original method: Array.prototype.map(); myMap: Array.prototype.myMap()
*/
var s = [23, 65, 98, 5];      // Global variable
Array.prototype.myMap = function(callback) {
  var newArray = [];
  for(let i=0; i<s.length; i++){
    newArray.push(callback(s[i]));
  }
  return newArray;
};
var new_s = s.myMap(function(item) {
  return item * 2;
});

/** using the FILTER method to extract data from arrays
 *  > filter() filters the array, based on the function passed to it
 *  > Arrays.prototype.filter() === .filter()
 *  > doesn't modify the original array
 *  > callback function accepts three arguments:
 *       1st : the current element being processed
 *       2nd : the index of that element
 *       3rd : the array upon which the filter method was called
*/
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);      // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]

/** implementing the filter() method on a prototype 
 *  > Arrays.prototype.myFilter() behaves exactly like Arrays.prototype.filter()
*/
var s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback) {
  var newArray = [];
  for(let i=0; i<s.length; i++){
    if(callback(s[i])) newArray.push(s[i]);
  }
  return newArray;
};
var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

/** returning part of an array using SLICE method
 *  > .slice() returns a copy of certain elements of the array
 *  > 2 args:
 *      - 1st : gives the index of where to begin the slice (included)
 *      - 2nd : the index for where to end the slice (excluded)
 *  > if no args provided, makes a copy of the whole array (beginning till end)
 *  > .slice() doesn't mutate the original array
*/
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);        // [ 'Dog', 'Tiger' ]

/** removing elements from an array using .slice instead of .splice()
 *  > using the slice method instead of splice helps to avoid any array-mutating side effects
*/
function nonMutatingSplice(cities) {
  // return cities.splice(3);     // mutates the original array 'cities'
  return cities.slice(0,3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

/** combining two arrays using CONCAT method
 *  > concatenation means to join items end to end
 *  > returns a new array; does not mutate either of the original arrays
*/
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

/** adding elements to the end of the array using concat instead of push
 *  > concat offers a way to add new items to the end of an array without any mutating side effects
*/
function nonMutatingPush(original, newItem) {
  //return original.push(newItem);        // mutates the original array
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

/** using the REDUCE method to analyze data
 *  > Arrays.prototype.reduce() : iterates over each item in an array and returns a single value
 *  > this is achieved via a callback function
 *  > map and filter can be derived using reduce
 *  > four args of callback function;
 *      - accumulator : it gets assigned the return value of callback fn from previous iteration
 *      - the current element being processed
 *      - the index of that element
 *      - the array upon which reduce is called
 *  > reduce has additional param apart from callback fn which takes an initial value for the accumulator
 *      - if not used: 1st iteration is skipped; second iteration gets passed the 1st elem of arr as the accumulator
*/
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);          // { John: 34, Amy: 20, camperCat: 10 }

// using map, filter or reduce to solve complex problems
// PROBLEM: return array containing "square of positive integers" from given array
const squareList = arr => {
  return arr
    .filter(w => Math.floor(w)==w)
    .filter(w => w>0)
    .map(w => w*w);
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/** sorting an array alphabetically using SORT method
 *  > sort method sorts the elements of an array according to the callback fn (compare fn)
 *  > compareFunction(a,b): 
 *        - positive : a will come after b
 *        - negative : a will come before b
 *        - zero     : a an b will remain unchanged
 *  > if compare fn is not provided, the default comparison (UTF encoding) can produce unexpected results
 *  > hence, we should always provide the compare fn
*/
function alphabeticalOrder(arr) {
  return arr.sort((a,b) => a>b?1:-1);
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);    // [ 'a', 'a', 'c', 'd', 'g', 'z' ]

/** returning a sorted array w/o changing the original array
 *  > .sort() mutates the array in place
 *  > one way to avoid it is to make copy first (using concat/slice)
*/
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  var newArr = [].concat(arr);
  return newArr.sort((a,b)=>a-b);
}
nonMutatingSort(globalArray);

/** splitting a string into an array using SPLIT method
 *  > .split() splits a string into an array of strings
 *  > takes an argument for the delimiter (a character or a regular expression to use to break up the string)
 *  > strings are by themselves immutable
*/
var str = "Hello World";
var bySpace = str.split(" ");           // ["Hello", "World"]
var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/); // ["How", "are", "you", "today"]

/** combining an array into a string using the JOIN method
 *  > to join the elements of an array together to create a string
 *  > takes an argument for the delimiter that is used to separate the array elements in the string
*/
function sentensify(str) {
  return str.split(/[ .,\-]/g).join(" ");
}
sentensify("May-the-force-be-with-you");  // May the force be with you

