function setUnionOfAnyAmountOfSets(...args) {
  var set = new Set();

  for(s of args)
    for(num of s)
      set.add(num);
      
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;