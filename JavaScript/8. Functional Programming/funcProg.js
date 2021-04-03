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

