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