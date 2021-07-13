// Given an array of numbers and an index i, return the index of the nearest larger number of
// the number at index i, where distance is measured in array indices.

// For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

// If two distances to larger numbers are the equal, then return any one of them.
// If the array at i doesn't have a nearest larger integer, then return null.

function NearestLargestNumber(arr, index) {

    const ref = arr[index];

    let right = index + 1, left = index - 1
    while(right < arr.length || left >= 0) {
        if(arr[right] > ref) {
            return right;
        } else if(right < arr.length) {
            right += 1;
        }
        if(arr[left] > ref) {
            return left;
        } else if (left >= 0) {
            left -= 1;
        }
    }

    return null;

}

// Time => O(N)
// Space => O(N)

console.log(NearestLargestNumber([4, 7, 3, 2, 0], 2))