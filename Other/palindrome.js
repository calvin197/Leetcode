function palindrome(str){
  let midLen = Math.ceil(str.length/2)
  for (let i = 0; i < midLen ; i++){
    if (str[i]!==str[str.length-1-i]) return false
  }
  return true;
}

//'aba'
//'abba'