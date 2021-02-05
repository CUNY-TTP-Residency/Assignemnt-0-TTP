function isPalindrome(word) {
  for(let i = 0,  j = word.length-1; i < word.length, j > 0; i++, j--)
    if(word.charAt(i) != word.charAt(j))
      return false;
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;