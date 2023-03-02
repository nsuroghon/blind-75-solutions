// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing
// a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// Prices = [7,1,5,3,6,4]
// Buy at price[1], sell at prices[4]


// Two Pointer solution
function maxProfit(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            if(profit > maxProfit) maxProfit = profit;
        }
        else {
            left = right;
        }
        right++
    }

    return maxProfit;
}

// Time - O(N)
// Space - O(1)


// Option 1:
// Logic:
// Create a map:
// price bought : price sold
// Map = {
    // 2 : 4
    // 4 : 1
    // 1 : none
// }

// At each price, we calculate the maximum profit we can make
// At the end return the price that would've generated the most profit
// Prices = [2,4,1]

// Time - O(n) + O(n)
// Space - O(n)

// Option 2:
// Map only stores the local max
// Instead of store all, we just replace the price bought and price sold if we find a better option

// Time - O(n) + O(n)
// Space - O(1)

// function maxProfit(prices) {
//     let profit = 0;

//     for(let i = 0; i < prices.length; i++) {
//         const firstPrice = prices[i]
        
//         for(let j = i + 1; j < prices.length; j++) {
//             const secondPrice = prices[j]
//             if((secondPrice - firstPrice) > profit) profit = secondPrice - firstPrice;
//         }
//     }

//     return profit;
// }


// function maxProfit(prices) {
//     // get the max profit of each purchase day and store it
//     console.log(prices)

//     const store = {}

//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i + 1; j < prices.length; j++) {
//             let localMax = prices[i + 1]
//             if(prices[j] > localMax) localMax = prices[j]
//             store[prices[i]] = localMax - prices[i]
//         }
//     }

//     console.log(store)

//     for (el in store) {
//         let profit = 0;
//         if(store[el] > profit) {
//             profit = store[el]
//         }
//         return profit;
//     }
// }

// function maxProfit(prices) {
//     let localMin = prices[0]
//     let indexOfMin = 0;

//     for(let i = indexOfMin + 1; i < prices.length; i++) {
//         if(prices[i] < localMin) {
//             localMin = prices[i];
//             indexOfMin = i;
//         };
//     }

//     let localMax = localMin;
//     let indexOfMax = indexOfMin;

//     for(let j = indexOfMin + 1; j < prices.length; j++) {
//         if(prices[j] > localMax) {
//             localMax = prices[j];
//             indexOfMax = j;
//         }
//     }
//     return (localMax - localMin) <= 0 ? 0 : localMax - localMin
// }

// function maxProfit(prices) {
//     console.log(prices)

//     let store = {}

//     for(let i = 0; i < prices.length; i++) {
//         store[i + 1] = prices[i];
//     }

//     console.log(store)
// }

// console.log(maxProfit([2,4,1]))
console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([7,6,4,3,1]))
// console.log(maxProfit([1,2]))

