function frequencyCounter(word) {
  var map = {};
  for(let i = 0; i < word.length; i++){
    let c = word.charAt(i);
    map[c] = map[c] === undefined ? 1 : map[c] + 1;
  }
  return map;
}

// Do not edit this line;
module.exports = frequencyCounter;