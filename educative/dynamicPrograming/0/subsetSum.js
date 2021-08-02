// Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

// Example 1: #
// Input: {1, 2, 3, 7}, S=6
// Output: True
// The given set has a subset whose sum is '6': {1, 2, 3}
// Example 2: #
// Input: {1, 2, 7, 1, 5}, S=10
// Output: True
// The given set has a subset whose sum is '10': {1, 2, 7}
// Example 3: #
// Input: {1, 3, 4, 8}, S=6
// Output: False
// The given set does not have any subset whose sum is equal to '6'.

function SubsetSum(nums, sum) {
    const n = nums.length;
    const m = sum;

    const dp = Array(n).fill(false);

    dp[0] = true;

    for(let s = 1; s <= m; s++) {
        dp[s] = s === nums[0]
    }

    for(let i = 1; i < n; i++) {
        for(let s = m; s > 0; s--) {
            if(s >= nums[i]) {
                dp[s] = dp[s - nums[i]]
            }
        }
    }

    return dp[m]
}

// Time => O(n * m)
// space => O(m)

console.log(SubsetSum([1,3,4,8], 6))