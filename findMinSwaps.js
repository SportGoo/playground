function findMinSwaps(arr, n) {
  //Array To Store count of zeroes
  let allZeroes = [];
  let count = 0;
  //Count number of zeroes
  //on right side of every one.
  allZeroes[n - 1] = 1 - arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    allZeroes[i] = allZeros[i + 1];
    if (arr[i] == 0) allZeroes[i]++;
  }
  //Count total number of swaps by adding number of zeros
  //on the right side ever one.
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      count += allZeroes[i];
      console.log(count);
    }
    // console.log(count);
    return count;
  }
}
