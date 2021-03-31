/** Data Structures
 *  > multiple ways to store and access data
*/

// using an array to store a collection of data
// one-dimensional array: can contain boolean/string/numbers & other valid JS datatypes
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);        // 7

// multi-dimensional array: array containing other arrays/objects
let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
];

// accessing an array's content using bracket notation
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];      // retrieving
ourArray[1] = "not b anymore";      // setting