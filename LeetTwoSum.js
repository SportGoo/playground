var twoSum = function(nums, target) {
  var len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

//with Hash 1

// map = {1: 0, 5:1, 9:2}
// target = 10

// i = 2 ;
// value = 9
// Diffrence = 10-9 =1

var twoSum = function(nums, target) {
  var map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] !== undefined) {
      return [map[diff], nums[i]];
    } else {
      map[nums[i]] = i;
    }
  }
};

//With Hash 2

var twoSum = function(nums, target) {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

// Explanation
// creating an object
// Input: nums = [2,7,11,15], target = 9
// Going to loop
// as we iterate first time  first time we will hit 2
// index = 0
// num = 2

// if number 2 is exist in storage ? it deosnt in the sortage now
// so we will take target(9 ) - num(2) = index

// storage = {
//     '7': 0
//     (key): value(index)

// }

// as we iterate second time  first time we will hit 2
// index = 1
// num = 7

// if number 7 is exist in storage ? YES IT DOES
// so we are saying return the current index and the index we previous store in storage hash
// [0,1]
// [2,7] = 9
