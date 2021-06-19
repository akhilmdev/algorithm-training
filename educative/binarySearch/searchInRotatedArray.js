// Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number,
// find if a given ‘key’ is present in it.

// Write a function to return the index of the ‘key’ in the rotated array.
// If the ‘key’ is not present, return -1. You can assume that the given array does not have any duplicates.

// Example 1:

// Input: [10, 15, 1, 3, 8], key = 15
// Output: 1
// Explanation: '15' is present in the array at index '1'.
//     1   3   8   10   15   
//  Original array:  
//  Array after 2 rotations:  
//     10   15   1   3   8   
// Example 2:

// Input: [4, 5, 7, 9, 10, -1, 2], key = 10
// Output: 4
// Explanation: '10' is present in the array at index '4'.

// Original array:  
// -1   2   4   5   7   9   10   
// Array after 5 rotations:  

// 4   5   7   9   10   -1   2

function SearchInRotatedArray(arr, key) {
    const maxIndex = maxValue(arr);
    return searchArray(arr, key, maxIndex);
}

function maxValue(arr) {
    let start = 0;

    while(arr[start] < arr[start + 1]) {
        start += 1;
    }
    return start
}

function searchArray(arr, key, maxValue) {
    let start = 0;
    let end = maxValue;
    let ele;

    ele = ArraySearch(start, end, arr, key)
    if (typeof ele === 'number') return ele

    start = maxValue + 1;
    end = arr.length - 1;

    ele = ArraySearch(start, end, arr, key)
    if (ele) return ele

    return -1;
}

function ArraySearch(start, end , arr, key) {
    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === key) return mid;
        
        const {nextStart, nextEnd} = ascendingArraySearch(arr, mid, key);
        if (nextStart) start = nextStart;
        if (nextEnd) end = nextEnd;
        
    }
}

function ascendingArraySearch(arr, mid, key) {
    let start, end;
    if(arr[mid] < key) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
    return { nextStart: start, nextEnd: end }
}

// Time => O(N)
// Space => O(1)


function searchInRotatedArray(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === key) return mid;

        if (arr[start] <= arr[mid]) {
            if(key >= arr[start]  && key < arr[mid]) {
                end = mid - 1
            } else {
                start = mid + 1;
            }
        } else {
            if(key > arr[mid]  && key <= arr[end]) {
                start = mid + 1
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

// Time => O(logN)
// Space => O(N)


console.log(SearchInRotatedArray([10, 15, 1, 3, 8], 15))
console.log(SearchInRotatedArray([3, 7, 3, 3, 3], 7))
console.log(searchInRotatedArray([4, 5, 7, 9, 10, -1, 2], 7))
console.log(searchInRotatedArray([3, 7, 3, 3, 3], 7))