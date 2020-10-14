//Longest Subarray with Ones after Replacement
//[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1] k = 2
//[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3

// [0,1,0,1] k = 1 ==> 3


function logenstSubArraysOfOne(array, maxReplacement) {
    let start = 0;
    let end = 0;
    let maxLength = 0;

    while (end < array.length) {
        if (array[end] !== 1) {
            maxReplacement--;
        }

        if (maxReplacement < 0) {
            if (array[start] === 0) maxReplacement++;
            start++;
            end++;
        } else {
            maxLength = Math.max(maxLength, end - start + 1);
            end++;
        }
    }
    return maxLength;
}

const lengthSubArray = logenstSubArraysOfOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 2)
console.log(lengthSubArray)