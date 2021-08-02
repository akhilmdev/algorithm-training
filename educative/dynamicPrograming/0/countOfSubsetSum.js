// Given a set of positive numbers, find the total number of subsets whose sum is equal
// to a given number ‘S’.

// Example 1: #
// Input: {1, 1, 2, 3}, S=4
// Output: 3
// The given set has '3' subsets whose sum is '4': {1, 1, 2}, {1, 3}, {1, 3}
// Note that we have two similar sets {1, 3}, because we have two '1' in our input.
// Example 2: #
// Input: {1, 2, 7, 1, 5}, S=9
// Output: 3
// The given set has '3' subsets whose sum is '9': {2, 7}, {1, 7, 1}, {1, 2, 1, 5}

function countOfSubsetSum(nums, sum) {
    let n = nums.length;

    const dp = Array(sum+1).fill(0);

    dp[0] = 1;

    for(let s = 1; s <= sum; s++) {
        if(nums[0] === s) dp[s] = nums[0];
    }
    
    for(let i = 1; i < n; i++) {
        for(let s = sum; s > 0; s--) {
            if(s >= nums[i]) {
                dp[s] = dp[s] + dp[s-nums[i]];
            }
        }
    }
    return dp[sum]

}

// Time => O(n * s)
// Space => O(s)

console.log(countOfSubsetSum([1,2,7,1,5], 9))