// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Explanation: There are four unique triplets whose sum is equal to zero.

function uniqueTripletsToZero(arr) {
    arr.sort((a,b) => a-b); // [-3,-2,-1,0,1,1,2]
    const findSum = (index) => {
        let start = index + 1;
        let end = arr.length - 1;
        const triplet = [];

        const targetSum = arr[index] * -1;

        while(start < arr.length && start < end) {
            if (targetSum === arr[end] + arr[start]) {
                triplet.push([arr[index], arr[end], arr[start]]);
                end -= 1;
                start += 1;
            } else if (targetSum > arr[end] + arr[start]) {
                start += 1;
            } else {
                end -= 1;
            }
        }
        return triplet;
    }
    const triplets = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            const triplet = findSum(i);
            if (triplet.length) {
                triplet.map((triple) => triplets.push(triple));
            }
        }

    }

    return triplets;
}