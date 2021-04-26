// Minimum Window Sort (medium) #
// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

// Example 1:

// Input: [1, 2, 5, 3, 7, 10, 9, 12]
// Output: 5
// Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

// Input: [1, 3, 2, 0, -1, 7, 10]
// Output: 5


function minimumWindowSort(arr) {
    const copyArr = [...arr];
    arr.sort((a,b) => a-b);

    let end = arr.length;
    let start = 0;

    while((copyArr[start] === arr[start] || copyArr[end] === arr[end]) && start < end) {
        if (copyArr[start] === arr[start]) start += 1;
        if (copyArr[end] === arr[end]) end -= 1;
        if (start > end) break;
    }

    return end - start + 1;

}

function minimumWindowSort2(arr) {
    let start = 0;
    let end = arr.length - 1;
    let minValue = Infinity;               //[1, 2, 5, 3, 7, 10, 9, 12]
    let maxValue = -Infinity;              //[1, 3, 2, 0, -1, 7, 10]

    while(start < end && arr[start] < arr[start + 1] ) {
        start += 1;
    }

    while(start < end && arr[end] > arr[end - 1] ) {
        end -= 1;
    }

    for(let i = start; i < end; i++) {
        minValue = Math.min(minValue, arr[i]);
        maxValue = Math.max(maxValue, arr[i]);
    }

    while(start >= 0 && arr[start - 1] > minValue ) {
        start -= 1;
    }

    while(end < arr.length && arr[end + 1] < maxValue ) {
        end += 1;
    }

    return end - start + 1;
}