/**
 * Given an array of integers, find the first missing positive integer in linear time
 * and constant space. In other words, find the lowest positive integer that does not
 * exist in the array. The array can contain duplicates and negative numbers as well.
 * 
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 */

function LowestMissingPositiveInteger(array) {
    let missingInteger;
    for(let i = 0; i < array.length; i++) {
        if (array[i] <= array.length) {
            [array[array[i]], array[i]] = [array[i], array[array[i]]]
        }
        if (!array[i]) {
            missingInteger = i + 1;
            break;
        }
    }

    if (!missingInteger) return array.length;
    return missingInteger;
    
}
const missingInteger = LowestMissingPositiveInteger([])
console.log(missingInteger)