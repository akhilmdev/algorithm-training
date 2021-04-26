// unsorted
// Input: [-2, 0, 1, 2], target=2
// Output: 1
// Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
// [-3, -1, 1, 2], target=1


function closestToTarget(arr, target) {
    arr.sort((a, b) => a - b);
    let minSum = Infinity;
    let minDiff = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let end = arr.length - 1;
        let start = i + 1;

        while (start < end) {
            const sum = arr[start] + arr[end] + arr[i];
            let diff = target - sum;
            diff = diff < 0 ? diff * -1 : diff;
            if (minDiff > diff) {
                minSum = sum;
                minDiff = diff;
            }
            start += 1;
        }
    }
    return minSum;
}

Time => O(N^2)
Space => O(N)