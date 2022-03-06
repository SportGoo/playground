var maxProfit = function(prices) {
  let left = 0;
  let right = 1;
  maxP = 0;
  let leng = prices.length;
  while (right < leng) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxPr = Math.max(maxP, profit);
    } else {
      left = right;
      right += 1;
    }
  }
  return maxP;
};
