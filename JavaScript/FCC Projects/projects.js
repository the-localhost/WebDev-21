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