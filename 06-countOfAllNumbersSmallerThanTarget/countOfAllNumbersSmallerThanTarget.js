function countOfAllNumbersSmallerThanTarget(nums, target) {
  var count = 0;
  for(let i = 0; i < nums.length; i++)
    count += nums[i] < target ? 1 : 0
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;