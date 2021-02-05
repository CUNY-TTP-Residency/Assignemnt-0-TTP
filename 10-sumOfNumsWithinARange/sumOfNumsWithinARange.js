function sumOfNumsWithinARange(nums, start, end) {
  count = 0;
  for(let i = 0; i < nums.length; i++)
    count += (nums[i] >= start && nums[i] <= end) ? 1 : 0;
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;