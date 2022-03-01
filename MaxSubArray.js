//Optimized Solution

class Solution {
    maximumSumSubarray(K, Arr, N) {
        let maxSum = 0;

        for (let i = 0; i < K; i++) {
            maxSum += Arr[i]
        }
        let curSum = maxSum;
        for (let winEnd = K; winEnd < Arr.length; winEnd++) {
            let winStart = winEnd - K;
            curSum = curSum - Arr[winStart] + Arr[winEnd]
            maxSum = Math.max(curSum, maxSum)
        }

        return maxSum
    }
}
