class MySolution {
  countDownSum(num) {
    if(num == 1)
      return 1;
    if(num > 0)
      num += this.countDownSum(num - 1);
    return num;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;