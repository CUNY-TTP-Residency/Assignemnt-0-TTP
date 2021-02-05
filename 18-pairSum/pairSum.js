function pairSum(nums, target) {
  if(nums.length <= 1)
    throw "Size is lower than 1.";

  var map = {}; 
  for(let i = 0; i < nums.length; i++)
    map[target - nums[i]] = i; // Setting the needed number pair as the property with a value of the index needed to create the pair in the array

  for(num in map)
    if(map[target - num] !== undefined && map[target - num] != num) // Checking the object if it has the corresponding pair needed and if the value does not equal itself.
      return true;

  return false;
}

// Do not edit this line;
module.exports = pairSum;