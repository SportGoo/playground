// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function bestTime(prices) {
  //console.log(prices)
  //maximum - we want to calculate our profit
  let profit = 0;
  let min = Infinity; //highest

  for (let i = 0; i < prices.length; i++) {
    //we need to get the minimum
    //update the minimum
    min = Math.min(min, prices[i]);
    //7, 7
    //7, 1
    //1
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
}

console.log(bestTime([7, 1, 5, 3, 6, 4], 5));

var maxProfit = function(prices) {
  let buyDayPrice = prices[0]; //
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    console.log("current index", prices[i]);
    console.log("this buy day price", buyDayPrice);
    if (prices[i] < buyDayPrice) {
      //7 < 7
      //1 < 7
      //5 < 1
      //3 < 1
      //6 < 1
      //4 < 1
      buyDayPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - buyDayPrice);
    }
  }
  return maxProfit;
};
