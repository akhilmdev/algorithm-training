// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

function sumIsTarget(arr, target) {
    let start = 0
    let end = arr.length - 1;

    while (start < end) {
        const sum = arr[start] + arr[end];
        if (sum === target) {
            return [start, end];
        } else if (sum > target) {
            end -= 1;
        } else {
            start += 1;
        }
    }
    return [];
}

