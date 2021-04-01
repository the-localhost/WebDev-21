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

// return largest numbers in arrays
function largestOfFour(arr) {
    let largestArr = [];
    for(let ar in arr){
      let largestI = 0;
      for(let i in arr[ar]){
        if(arr[ar][i]>arr[ar][largestI]) largestI = i;
      }
      largestArr.push(arr[ar][largestI]);
    }
    return largestArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);        // [5, 27, 39, 1001]

// check if str ends with target string; in ES6: {return str.endsWith(target);}
function confirmEnding(str, target) {
    let s = str.length;
    let t = target.length;
    if(s<t) return false;       // target can't be smaller than str
    for(let i = s-t; i<s; i++){
        if(str[i]!=target[i-s+t]) return false;
    }
    return true;
}
console.log(confirmEnding("Bastian", "n"));

// repeat a string
function repeatStringNumTimes(str, num) {
  let res = "";
  if(num<=0) return res;
  for(let i=0; i<num; i++){
    res+=str;
  }
  return res;
}
repeatStringNumTimes("abc", 3);   // abcabcabc

// truncate a string
function truncateString(str, num) {
  if(str.length<=num) return str;
  let res = "";
  for(let i=0; i<num; i++){
    res+=str[i];
  }
  return res+'...';
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));  // A-tisket...