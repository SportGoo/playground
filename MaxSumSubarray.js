class Solution {
    maximumSumSubarray(K, Arr, N) {
        let maxSum = 0;
        for (let i = 0; i < Arr.length - K + 1; i++) {
            let windowSum = 0;
            for (let j = i; j < i + K; j++) {
                windowSum += Arr[j];
            }
            maxSum = Math.max(maxSum, windowSum);
        }

        return maxSum;
    }
}