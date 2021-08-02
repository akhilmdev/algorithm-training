// Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

// Example 1: #
// Input: {1, 2, 3, 9}
// Output: 3
// Explanation: We can partition the given set into two subsets where minimum absolute difference 
// between the sum of numbers is '3'. Following are the two subsets: {1, 2, 3} & {9}.
// Example 2: #
// Input: {1, 2, 7, 1, 5}
// Output: 0
// Explanation: We can partition the given set into two subsets where minimum absolute difference 
// between the sum of number is '0'. Following are the two subsets: {1, 2, 5} & {7, 1}.
// Example 3: #
// Input: {1, 3, 100, 4}
// Output: 92
// Explanation: We can partition the given set into two subsets where minimum absolute difference 
// between the sum of numbers is '92'. Here are the two subsets: {1, 3, 4} & {100}.

function MinimumSubsetSumDifference(nums) {
    const sum = nums.reduce((acc, ele) => acc + ele, 0);

    const m = Math.floor(sum / 2);
    const n = nums.length;

    const dp = Array(n).fill(0).map(() => Array(m + 1).fill(0));

    for(let s = 1; s <= m; s++) {
        if(nums[0] <= s) dp[0][s] = nums[0];
    }

    for(let i = 1; i < n; i++) {
        for(let s = 1; s <= m; s++) {
            let p1 = dp[i-1][s];
            let p2 = 0;
            
            if(nums[i] <= s) {
                p2 = nums[i] + dp[i - 1][s - nums[i]];
            }
            dp[i][s] = Math.max(p1, p2);
        }
    }

    let max = dp[n-1][m];
    const sub1 = []
    const sub2 = []
    let subSum1 = 0;
    let subSum2 = 0;
    let s = m

    let result = 0;

    for(let i = n - 2; i >= 0; i--) {
        if(max === dp[i][m]) {
            sub1.push(nums[i + 1]);
            subSum1 += nums[i + 1];
            result += nums[i+1];
        } else {
            sub2.push(nums[i + 1])
            subSum2 += nums[i + 1];
            max = dp[i][s-nums[i + 1]]
            result -= nums[i + 1];
        }
    }

    if(s !== 0) {
        subSum2 += nums[0]
        result -= nums[0]
    }

    console.log(Math.abs(result))
    return Math.abs(subSum2 - subSum1);

}


// Time => O(n * m)
// Space => O(n * m)

console.log(MinimumSubsetSumDifference([1,3, 100, 4]))