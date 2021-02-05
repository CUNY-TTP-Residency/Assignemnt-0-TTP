function sumOfAllEvenNumbers(nums) {
  var sum = 0;
  for(let i = 0; i < nums.length; i++)
    sum += (nums[i] % 2 == 0) ? 1 : 0;
  return sum;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;