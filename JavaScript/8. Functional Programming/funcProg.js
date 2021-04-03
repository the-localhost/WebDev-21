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