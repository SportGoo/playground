var sortArrayByParity = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] % 2 !== 0) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            end--
        } else {
            start++
        }


    }
    return nums
};