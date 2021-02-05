function sumOfMinimumAndMaximum(nums) {
  var min = Infinity;
  var max = -Infinity;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] < min)
      min = nums[i];
    if(nums[i] > max)
      max = nums[i];
  }
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;