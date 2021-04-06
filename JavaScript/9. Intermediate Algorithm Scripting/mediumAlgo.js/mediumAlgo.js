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