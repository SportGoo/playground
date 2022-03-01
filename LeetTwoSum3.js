var twoSum = function (nums, target) {
    let numberIndex = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        if (numberIndex.has(complement)) {
            result[0] = numberIndex.get(complement)
            result[1] = i;
            return result;
        }
        numberIndex.set(num, i)
    }
}

// second solution 

var twoSum = function (numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        const sum = numbers[l] + numbers[r];

        if (sum > target) {
            r--;
        } else if (sum < target) {
            l++;
        } else {
            return [l + 1, r + 1];
        }
    }
};