/** Algorithm
 * An algorithm is a series of step-by-step instructions that describe how to do something.
*/

// converting Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = 9*celsius/5+32;
    return fahrenheit;
}
convertToF(30);

// reversing a string
function reverseString(str) {
    let strArr = [...str];
    let newStr = '';
    for(let i = strArr.length-1; i>=0; i--)
        newStr += strArr[i];
    return newStr;
}
console.log(reverseString("hello"));        // olleh

// factorialize a number
function factorialize(num) {
  if(num==0) return 1;
  return num*factorialize(num-1);
}
factorialize(5);        // 120