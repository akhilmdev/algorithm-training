// Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack with
// a capacity ‘C.’ The goal is to get the maximum profit out of the knapsack items. Each item can
// only be selected once, as we don’t have multiple quantities of any item.

// Let’s take Merry’s example, who wants to carry some fruits in the knapsack to get maximum profit.
// Here are the weights and profits of the fruits:

// Items: { Apple, Orange, Banana, Melon }
// Weights: { 2, 3, 1, 4 }
// Profits: { 4, 5, 3, 7 }
// Knapsack capacity: 5

// Let’s try to put various combinations of fruits in the knapsack, such that their total weight is not more than 5:

// Apple + Orange (total weight 5) => 9 profit
// Apple + Banana (total weight 3) => 7 profit
// Orange + Banana (total weight 4) => 8 profit
// Banana + Melon (total weight 5) => 10 profit

// This shows that Banana + Melon is the best combination as it gives us the maximum profit, and the total
// weight does not exceed the capacity.

// Problem Statement #
// Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these
// items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C.’
// Each item can only be selected once, which means either we put an item in the knapsack or we skip it.



// Bottom-up Dynamic Programming #
// Let’s try to populate our dp[][] array from the above solution by working in a bottom-up fashion.
// Essentially, we want to find the maximum profit for every sub-array and every possible capacity.
// This means that dp[i][c] will represent the maximum knapsack profit for capacity ‘c’ calculated from the first ‘i’ items.

// So, for each item at index ‘i’ (0 <= i < items.length) and capacity ‘c’ (0 <= c <= capacity), we have two options:

// Exclude the item at index ‘i.’ In this case, we will take whatever profit we get from the sub-array excluding this item => dp[i-1][c]
// Include the item at index ‘i’ if its weight is not more than the capacity. In this case, we include its profit plus whatever
// profit we get from the remaining capacity and from remaining items => profit[i] + dp[i-1][c-weight[i]]
// Finally, our optimal solution will be maximum of the above two values:

//     dp[i][c] = max (dp[i-1][c], profit[i] + dp[i-1][c-weight[i]]) 

let solveKnapSack = (profit, weight, capacity) => {
    
    let n = profit.length;

    if(n === 0 || capacity < 0 || weight.length !== n) return 0;

    const dp = Array(n)
                .fill(0)
                .map(() => Array(capacity + 1).fill(0))

    // for(let i = 0; i < n; i++) dp[i][0] = 0;

    for(let c = 0; c < capacity + 1; c++) {
        if(weight[0] <= c) dp[0][c] = profit[0];
    }

    for(let i = 1; i < n; i++) {
        for(let c = 1; c <= capacity; c++) {
            let profit1 = 0;
            let profit2 = 0;

            if(weight[i] <= c) {
                profit1 = profit[i] + dp[i-1][c - weight[i]];
            }

            profit2 = dp[i-1][c];

            dp[i][c] = Math.max(profit1, profit2);

        }
    }

    const selectedProfit = [];
    let totalProfit = dp[n-1][capacity];
    let currentCapacity = capacity;

    for(let i = n; i > 0; i--) {
        if(totalProfit !== dp[i-1][currentCapacity]) {
            selectedProfit.push(weight[i])
            currentCapacity -= weight[i];
            totalProfit -= profit[i]
        }
    }

    if(totalProfit !== 0) selectedProfit.push(weight[0]);

    console.log(selectedProfit)

    return dp[n-1][capacity]

}

// time => O(N * C)
// Space => O(N * C)

// space complexity can be reduced to O(C) by using 1D arrya with capacity loop been done in revers order

console.log(solveKnapSack([1, 6, 10, 16], [1, 2, 3, 5], 6))

// let solveKnapsack = function(profits, weights, capacity) {
//     const n = profits.length;
//     if (capacity <= 0 || n == 0 || weights.length != n) return 0;
  
//     const dp = Array(capacity + 1).fill(0);
  
//     // if we have only one weight, we will take it if it is not more than the capacity
//     for (let c = 0; c <= capacity; c++) {
//       if (weights[0] <= c) dp[c] = profits[0];
//     }
  
//     // process all sub-arrays for all the capacities
//     for (let i = 1; i < n; i++) {
//       for (let c = capacity; c >= 0; c--) {
//         let profit1 = 0,
//           profit2 = 0;
//         // include the item, if it is not more than the capacity
//         if (weights[i] <= c) profit1 = profits[i] + dp[c - weights[i]];
//         // exclude the item
//         profit2 = dp[c];
//         // take maximum
//         dp[c] = Math.max(profit1, profit2);
//       }
//     }
  
//     // maximum profit will be at the bottom-right corner.
//     return dp[capacity];
//   };
  
//   var profits = [1, 6, 10, 16];
//   var weights = [1, 2, 3, 5];
//   console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
//   console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);

// space => O(C)