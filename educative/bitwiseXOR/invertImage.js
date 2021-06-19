// Given a binary matrix representing an image, we want to flip the image horizontally, then invert it.

// To flip an image horizontally means that each row of the image is reversed. For example,
// flipping [0, 1, 1] horizontally results in [1, 1, 0].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example,
// inverting [1, 1, 0] results in [0, 0, 1].

// Example 1:

// Input: [
//   [1,0,1],
//   [1,1,1],
//   [0,1,1]
// ]
// Output: [
//   [0,1,0],
//   [0,0,0],
//   [0,0,1]
// ]
// Explanation: First reverse each row: [[1,0,1],[1,1,1],[1,1,0]]. Then, invert the image: [[0,1,0],[0,0,0],[0,0,1]]

// Example 2:

// Input: [
//   [1,1,0,0],
//   [1,0,0,1],
//   [0,1,1,1], 
//   [1,0,1,0]
// ]
// Output: [
//   [1,1,0,0],
//   [0,1,1,0],
//   [0,0,0,1],
//   [1,0,1,0]
// ]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]


function invertImage(imgArr) {
    return imgArr.map(row => {
        let start = 0;
        let end = row.length - 1;
        while(start <= end) {
            if (start === end) {
                row[start] = row[start] ^1;
                start = end + 1;
            } else {
                [row[start], row[end]] = [row[end] ^1, row[start]^1];
                start += 1;
                end -= 1;
            }
        }
        return row;
    })
}

// Time => O(n * m)
// Space => O(1)

console.log(invertImage([[1,0,1],[1,1,1],[0,1,1]]))
console.log(invertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))