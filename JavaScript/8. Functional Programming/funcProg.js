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
var fixedValue = 4;
function incrementer () {       // returns global var fixedValue incremented by 1 w/o changing it
    return fixedValue+1;
}