var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return nums[i];
};

console.log(twoSum([2, 7, 11, 15], 9));


//Add two numbers

var addTwoNumbers = function(l1, l2) {
    
};
