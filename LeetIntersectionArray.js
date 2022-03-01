/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let firstSet = new Set();

    for (let num of nums1) {
        firstSet.add(num)
    }

    let secondSet = new Set();
    for (let num of nums2) {
        if (firstSet.has(num)) {
            secondSet.add(num)
        }
    }
    return Array.from(secondSet)
};