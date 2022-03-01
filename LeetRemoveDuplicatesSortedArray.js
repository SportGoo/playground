
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let pointer1 = 0;

    for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if (nums[pointer1] !== nums[pointer2]) {
            pointer1++;
            nums[pointer1] == nums[pointer2];
        }
    }
    return pointer1 + 1

}

//   Not clear which function taking unique number front of the array;
//   What is the purpose of the return  inceremented pointer1 + 1 on the end 










// var removeDuplicates = function (nums) {
//     const len = nums.length;
//     for (i = 0; i < len - 1; i++) {
//         if (i > nums.length - 1) {
//             break;
//         }
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
//     return nums.length;
// };