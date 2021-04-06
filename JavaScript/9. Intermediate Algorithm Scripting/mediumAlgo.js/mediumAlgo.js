/** INTEREDIATE ALGORITHM SCRIPTING */

// sum all numbers in a range
function sumAll(arr) {
    let m = arr[0]>arr[1]?arr[0]:arr[1];
    let n = (m==arr[0])?arr[1]:arr[0];
    return Math.abs(((m*(m+1)) - (n*(n-1)))/2);         // sum till bigger no (included) - sum till smaller no (excluded)
}
sumAll([1, 4]);
// another method: sort array, add from arr[0] to arr[1]