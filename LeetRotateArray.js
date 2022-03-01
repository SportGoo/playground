/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Input: nums = [1,2,3,4,5,6,7], k = 3
//Output: [5,6,7,1,2,3,4]





var rotate = function (nums, k) {
    k = k % nums.length;

    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1)



};

var reverse = function (nums, start, end) {

    while (start < end) { //0(1)
        let temp = nums[start];//0(1)
        nums[start] = nums[end];
        nums[end] = temp;
        start++ //0(1)
        end--  //0(1)
    }


}