// palindrome checker
function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[\W_]+/g, "");
    console.log(str);
    for(let i=0; i<(str.length/2); i++){
      if(str[i]!=str[str.length-i-1]) 
        return false;
    }
    return true;
} 
palindrome("_eye");         // true

// roman numeral converter (upto 3999)
function convertToRoman(num) {
    let roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let ar = [];
    ar.push(num/1000);
    num%=1000;
    ar.push(num/100);
    num%=100;
    ar.push(num/10);
    num%=10;
    ar.push(num);
    let str = '';
    for(let i=0; i<4; i++){
      ar[i] = Math.floor(ar[i]);
      if(ar[i]==0) continue;
      if(ar[i]==4){
        str+=roman[2*i]+roman[2*i-1];
      }else if (ar[i]>=5){
          str+=roman[2*i-1];
          ar[i]-=5;
          i--;
      }else{
        for(let j=0; j<ar[i]; j++)
          str+=roman[2*i];
      }
    }
   console.log(ar);
   return str;
}
console.log(convertToRoman(2));

// caesars cipher
function rot13(str) {
    let res = "";
    for(let i in str){
      let code = str.charCodeAt(i);
      if(code<=90 && code>=65){
        code = ((13+(code-64))%26)+64;
        if(code==64) code=90;
      }
      res += String.fromCharCode(code);
    }
    return res;
}
console.log(rot13("SERR CVMMN!"));

// telephone number validator
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");

// cash register
var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  
  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}
// test here
checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
]);