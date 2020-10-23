/**
 * This problem was asked by Airbnb.
 * Given a list of integers, write a function that returns the largest sum of
 * non-adjacent numbers. Numbers can be 0 or negative.
 * 
 * For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.
 * [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 * 
 * [5, 0, 20, 28, 40, 9]
 * 
 * Follow-up: Can you do this in O(N) time and constant space?
 */

function sumOfNonAdjacent(array) {
    return LargestSumOfNonAdjacent(array);
}

function LargestSumOfNonAdjacent(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    if (array.length === 2) return Math.max(...array);

    let leftSum = array[0] + LargestSumOfNonAdjacent(array.slice(2));
    let rightSum = array[1] + LargestSumOfNonAdjacent(array.slice(3));
    return Math.max(leftSum, rightSum);

}
// time  => O(2^log(n))
// space => O(1)

function sumOfNonAdjacentLinear(array) {
    let incl = array[0];
    let excl = 0;

    for(let i = 1; i < array.length; i++) {
        const temp = incl;
        incl = Math.max(excl + array[i], incl);
        excl = temp;
    }
    return incl;

}

const sum = sumOfNonAdjacent([5, 5, 10, 100, 10, 5, 5, 8, 2, 9, 1, 2, 0, 7, 2, 0])
console.log(sum);
const sum1 = sumOfNonAdjacentLinear([5, 5, 10, 100, 10, 5, 5, 8, 2, 9, 1, 2, 0, 7, 2, 0])
console.log(sum1);

/**
 * [5, 1, 1, 5]
 * 0 => 5 0
 * 1 => 5, 5
 * 2 => 6, 5
 * 3 => 10, 6
 *  */

