// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].


function removeDuplicate(arr) {
    let end = 1;
    let start = 0;

    while (end < arr.length) {
        if (arr[start] === arr[end]) {
            end += 1;
        } else {
            start += 1;
            arr[start] = arr[end];
            end += 1;
        }
    }
    return start + 1;
}
Time => O(N)
space => O(1)