/** INTEREDIATE ALGORITHM SCRIPTING */

// sum all numbers in a range
function sumAll(arr) {
    let m = arr[0]>arr[1]?arr[0]:arr[1];
    let n = (m==arr[0])?arr[1]:arr[0];
    return Math.abs(((m*(m+1)) - (n*(n-1)))/2);         // sum till bigger no (included) - sum till smaller no (excluded)
}
sumAll([1, 4]);
// another method: sort array, add from arr[0] to arr[1]

// symmetric difference between two arrays
function diffArray(arr1, arr2) {            // assumes elements in an array are unique
    var newArr = [];
    let freq = {};
    for(let i=0; i<arr1.length; i++){       // storing freq of each elem of arr1
      if(freq.hasOwnProperty(arr1[i]))
        freq[arr1[i]]++;
      else
        freq[arr1[i]] = 1;
    }
    for(let i=0; i<arr2.length; i++){       // storing freq of each elem of arr2
      if(freq.hasOwnProperty(arr2[i]))
        freq[arr2[i]]++;
      else
        freq[arr2[i]] = 1;
    }
    for(let elem in freq){
      if(freq[elem]==1) {                   // elems which appeared only once
        var entry = parseInt(elem);
        if(entry==elem) newArr.push(entry); // if elem is numeric
        else newArr.push(elem);
      }
    }
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);      // [4]
// another solution using pre-defined functions:
function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);       // [4]

// Seek & Destroy: remove all the elements mentioned after the array argument
function destroyer(arr) {
    let newArr = [...arr];
    for(let i=1; i<arguments.length; i++){              // note the use of arguments variable
      newArr = newArr.filter(w=>w!=arguments[i]);
    }
    return newArr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));       // [1,1]

// select objects from collection which has same values for properties present in source
function whatIsInAName(collection, source) {
    var arr = [];
    arr = collection.filter(w=>{
      for(let prop in source){
        if(!w.hasOwnProperty(prop) || source[prop]!=w[prop]){
          return false;
        }
      }
      return true;
    });
    return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" },            // [{ first: "Tybalt", last: "Capulet" }]
                { first: "Mercutio", last: null }, 
                { first: "Tybalt", last: "Capulet" }], 
                { last: "Capulet" });

                
// Spinal Tap Case
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");        // handling where new word starts w/o space with capital letter
  return str.toLowerCase().split(/[_\s-]+/g).join("-");
}
spinalCase('This Is Spinal Tap');

// Pig Latin
function translatePigLatin(str) {
  let regex = /[aeiou]/;  
  let res = str.match(regex);
  if(res==null) return str+"ay";        // if vowel is absent
  if(res.index==0) return str+"way";    // if first char is vowel
  return str.slice(res.index)+str.slice(0,res.index)+"ay";   // if first char is consonant
}
translatePigLatin("consonant");      // onsonantcay
translatePigLatin("rythm");          // rythmay
translatePigLatin("glove");          // oveglay

// Search and Replace
function myReplace(str, before, after) {
  before = before.toLowerCase();
  var cap = before[0].toUpperCase()+before.slice(1);
  var small = before[0].toLowerCase()+before.slice(1);
  var capRegex = new RegExp(cap);         // creating regex using a variable string
  var smallRegex = new RegExp(small);
  if(capRegex.test(str)){
    str = str.replace(capRegex, after[0].toUpperCase()+after.slice(1));
  }else{
    str = str.replace(smallRegex, after[0].toLowerCase()+after.slice(1));
  }
  return str;
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");    // He is Sitting on the couch

// DNA Pairing
function pairElement(str) {
  let res = [];
  for(let c in str){
    let char = str[c];
    let arr = [char];
    switch(char){
      case "G":
        arr.push("C");
        break;
      case "C":
        arr.push("G");
        break;
      case "A":
        arr.push("T");
        break;
      case "T":
        arr.push("A");
    }
    res.push(arr);
  }
  return res;
}
pairElement("GCG");     // [["G", "C"], ["C","G"], ["G", "C"]]

/** Missing Letters
 *  Other Solutions: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-missing-letters/16023/12
 *  My Solution:
*/
function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  for(var i=0; i<26; i++){
    if(str[0]===alpha[i])
      break;    
  }
  var j = i;
  while(alpha[j]===str[j-i]){
    j++;
  }
  if(j-i==str.length) return undefined;
  return alpha[j];
}
console.log(fearNotLetter("abce"));     // d

// Unite Unique
function uniteUnique(arr) {
  let res = [];
  for(let i in arguments){
    let arr = arguments[i];
    for(let j in arr){
      if(res.indexOf(arr[j])==-1) res.push(arr[j]);
    }
  }
  return res;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);   // [1, 3, 2, 5, 4]

// Convert HTML entities
function convertHTML(str) {
  let entities = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    "\"": "&quot;",
    "'" : "&apos;"
  };
  for(let entity in entities){
    var regex = new RegExp(entity, "g");
    str = str.replace(regex, entities[entity]);
  }
  return str;
}
convertHTML("Dolce & Gabbana");   // Dolce &amp; Gabbana

// Sum all odd Fibonacci numbers till N
function sumFibs(num) {
  if(num<1) return 0;
  if(num==1) return 1;
  let n0 = 1, n1 = 1, sum = 1;
  while(n1<=num){
    var temp = n1;
    n1+=n0;
    n0=temp;
    if(n0<=num && n0%2) {
      sum+=n0;
    }
  }
  return sum;
}
console.log(sumFibs(75025));        // 135721

// sum all primes <= N
function sumPrimes(num) {
  let sum=0;
    for(let i=2; i<=num; i++){
      if(isPrime(i)) sum+=i;
    }
    return sum;
}
const isPrime = (num) => {
  for(let i=2; i<num; i++){
    if(num%i==0) return false;
  }
  return true;
}
sumPrimes(10);      // 17

// Smallest Common Multiple
function smallestCommons(arr) {
  arr.sort((a,b)=>a-b);
  let a=arr[0], b=arr[1];
  let lcm=a;
  for(let i =a+1; i<=b; i++) {
    lcm = (lcm*i)/gcd(lcm, i);
  }
  return lcm;
}
const gcd = (b, a) => {
  if(a>b) return gcd(a,b);
  if(a==0) return b;
  return gcd(a, b%a);
};
console.log(smallestCommons([2,10]));   // 2520

// drop it
function dropElements(arr, func) {
  for(var i=0; i<arr.length; i++){
    if(func(arr[i])) break;
  }
  if(i==arr.length) return [];
  return arr.slice(i);
}
dropElements([1, 2, 3, 4], function(n) {return n > 5;});    // []

// steamroller: flatten the multi-dimensional array
function steamrollArray(arr, res=[]) {
  //console.log("new fn");
  for(let i in arr){
    if(!Array.isArray(arr[i])){
      res.push(arr[i]);
      //console.log(res);
    }else{
      steamrollArray(arr[i], res);
    }
  }
  return res;
}
steamrollArray([1, {}, [3, [[4]]]]);    // [1, {}, 3, 4]

// binary agents
function binaryAgent(str) {
  let chars = str.split(" ");
  let res = "";
  for(let i in chars){
    res+=String.fromCharCode(toDecimal(chars[i]));
  }
  return res;
}
function toDecimal(str){       // returns decimal conversion of binary string
  let ans = 0;
  for(let i=str.length-1; i>=0; i--){
    ans += parseInt(str[i])*powerOfTwo(str.length-1-i);
  }
  return ans;
}
function powerOfTwo(num){     // returns 2 raised to the power num
  let ans = 1;
  for(let i=1; i<=num; i++){
    ans*=2;
  }
  return ans;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111           // Aren't bonfires fun!?
            01110100 00100000 01100010 01101111 01101110 
            01100110 01101001 01110010 01100101 01110011 
            00100000 01100110 01110101 01101110 00100001 
            00111111);

// Everything Be True
function truthCheck(collection, pre) {
  for(let i in collection){
    if(!collection[i][pre]) return false;
  }
  return true;
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"},               // true
            {"user": "Dipsy", "sex": "male"}, 
            {"user": "Laa-Laa", "sex": "female"}, 
            {"user": "Po", "sex": "female"}], "sex");

// Arguments Optional
function addTogether(x) {
  if(typeof x!=typeof(1)) return undefined;
  if(arguments.length==2){
    if(typeof arguments[1]!=typeof(1)) return undefined;
    return x+arguments[1];
  } 
  return function(num){
    if(typeof num!=typeof(1)) return undefined;
    return num+x;
  };
}
addTogether(2,3);       // 5