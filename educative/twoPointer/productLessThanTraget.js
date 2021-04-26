// Given an array with positive numbers and a target number, find all of its contiguous
// subarrays whose product is less than the target number.

// Input: [2, 5, 3, 10], target=30 
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose product is less than the target.

// Input: [8, 2, 6, 5], target=50 
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
// Explanation: There are seven contiguous subarrays whose product is less than the target.

function productLessThanTarget(arr, target) {
    let start = 0;
    const subArrays = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < target) subArrays.push([arr[i]]);
        start = i + 1;
        let prod = arr[i];
        let subArray = [arr[i]];
        while(start < arr.length) {
            prod = prod * arr[start];
            if (prod < target) {
                subArray.push(arr[start]);
            } else {
                break;
            }
            start += 1;
        }
        if (subArray.length > 1) subArrays.push(subArray);
        subArray = [];
    }

    return subArrays;

}

// Time => O(N^2)
// Space => O(N^3)