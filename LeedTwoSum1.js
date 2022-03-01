// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; i++) {
            nums[i] + nums[j] === target
            return [i, j]
        }

    }

};


///Solution with hash 

// var twoSum = function(nums, target) {
//     let storage = {};
//     for(let [index,num] of nums.entries()){
//         if(storage[num]!== undefined) return [storage [num], index];
//         storage[target- num ] = index
//     }

// };

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
