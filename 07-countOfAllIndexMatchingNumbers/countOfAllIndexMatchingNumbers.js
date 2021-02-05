function countOfAllIndexMatchingNumbers(nums) {
  var count = 0;
  for(let i = 0; i < nums.length; i++)
    count += nums[i] == i ? 1 : 0;
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;