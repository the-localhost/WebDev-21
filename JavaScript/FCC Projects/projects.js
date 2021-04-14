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