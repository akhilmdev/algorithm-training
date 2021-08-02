// Given a set of positive numbers, find if we can partition it into two subsets such that the
// sum of elements in both subsets is equal.

// Example 1:

// Input: {1, 2, 3, 4}
// Output: True
// Explanation: The given set can be partitioned into two subsets with equal sum: {1, 4} & {2, 3}
// Example 2:

// Input: {1, 1, 3, 4, 7}
// Output: True
// Explanation: The given set can be partitioned into two subsets with equal sum: {1, 3, 4} & {1, 7}
// Example 3:

// Input: {2, 3, 4, 6}
// Output: False
// Explanation: The given set cannot be partitioned into two subsets with equal sum.

function EqualSubsetSumPartition(arr) {
    const sum = arr.reduce((acc, ele) => acc + ele, 0);

    if(sum % 2 !== 0) return false;

    return recurringKnapsack(arr, sum / 2, 0);
}

function recurringKnapsack(arr, sum) {

    let n = arr.length;
    let m = sum;

    // const dp = new Array(n).fill(false).map(() => new Array(m + 1).fill(false));
    const dp = new Array(m + 1).fill(false);
    dp[0] = true;
    
    // for(let i = 0; i < n; i++) {
    //     dp[i][0] = true;
    // }

    // for(let s = 1; s <= m; s++) {
    //     if(s === arr[0]) {
    //         dp[0][s] = true;
    //     }
    // }

    for(let s = 1; s <= m; s++) {
        dp[s] = s === arr[0]
    }

    // for(let i = 1; i < n; i++) {
    //     for(let s = 1; s <= m; s++) {
    //         if(dp[i-1][s]){
    //             dp[i][s] = dp[i-1][s]
    //         } else if(s >= arr[i]) {
    //             dp[i][s] = dp[i-1][s - arr[i]]
    //         }
    //     }
    // }

    for(let i = 1; i < n; i++) {
        for(let s = m; s > 0; s--) {
            if(s >= arr[i]) {
                dp[s] = dp[s-arr[i]]
            }
        }
    }

    // return dp[n-1][m]

    return dp[m]

}

// commented code
//      Time => O(n * m)
//      Space => O(n * m)

// Time => O(n * m)
// Space => O(m)

console.log(EqualSubsetSumPartition([1,2,3, 2]))