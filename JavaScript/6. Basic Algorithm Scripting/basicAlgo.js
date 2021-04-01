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

// finding the longest word in a string
function findLongestWordLength(str) {
    let words = str.match(/\w+/g);
    let maxLength = 0;
    for(let word in words){                 // in arrays, for...in loop brings indices into our variable
      let len = words[word].length;
      if(len>maxLength) maxLength = len;
    }
    return maxLength;
}
console.log(findLongestWordLength("May the force be with you"));        // 5

