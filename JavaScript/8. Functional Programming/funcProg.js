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

/** using the map method to extract data from an array
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