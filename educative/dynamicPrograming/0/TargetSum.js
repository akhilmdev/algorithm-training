// You are given a set of positive numbers and a target sum ‘S’. Each number should be assigned
// either a ‘+’ or ‘-’ sign. We need to find the total ways to assign symbols to make the sum of
// the numbers equal to the target ‘S’.

// Example 1: #
// Input: {1, 1, 2, 3}, S=1
// Output: 3
// Explanation: The given set has '3' ways to make a sum of '1': {+1-1-2+3} & {-1+1-2+3} & {+1+1+2-3}
// Example 2: #
// Input: {1, 2, 7, 1}, S=9
// Output: 2
// Explanation: The given set has '2' ways to make a sum of '9': {+1+2+7-1} & {-1+2+7+1}


// solution brief
// let s1 is subset 1 and s2 subset 2 
// => sum(s1) - sum(s2) = s
// And sum(s1) + sum(s2) = sum(nums)
// adding these two 
// sum(s1) - sum(s2) + sum(s1) + sum(s2) = s + sum(nums)
// => sum(s1) + sum(s1) = s + sum(nums);
// => sum(s1) = (s + sum(nums)) / 2


function TargetSum(nums, sum) {
    // see solution brief
    const sumNums = nums.reduce((acc, cur) => acc + cur, 0);
    const m = Math.floor((sum + sumNums) / 2);
    const n = nums.length;

    const dp = Array(m+1).fill(0);
    dp[0] = 1;

    for(let s = 1; s <= m; s++) {
        if(s === nums[0]) {
            dp[s] = 1;
        }
    }

    for(let i = 1; i < n; i++) {
        for(let s = m; s > 0; s--) {
            if(s >= nums[i]) {
                dp[s] = dp[s] + dp[s - nums[i]]
            }
        }
    }
    return dp[m]
}

// TIme => O(n * m)
// Space => O(m)

console.log(TargetSum([1,2,7,1], 9))