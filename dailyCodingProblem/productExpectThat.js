/**
 * Given an array of integers, return a new array such that each element at index i
 * of the new array is the product of all the numbers in the original array except the one at i.
 * 
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * 
 * Follow-up: what if you can't use division?
 * 
 * [1, 2, 3, 4, 5]
 * [  1,  1,  2, 6, 24]
 * [120, 60, 20, 5,  1]
 */

// without division bad way
function productExpectThatWithOutDivison(array) {
    const newArray = []
    for(let i = 0; i< array.length; i++) {
        let element = 1;
        for(let j = 0; j < array.length; j++) {
            if (j!==i) {
                element = element * array[j];
            }
        }
        newArray.push(element);
    }
    return newArray;
}
// O(N^2)
// O(N)
const solutionWithoutDiv = productExpectThatWithOutDivison([1, 2, 3, 4, 5])
console.log(solutionWithoutDiv);

 // with divistion
function productExpectThat(array) {
    const prod = array.reduce((acc, element) => {
        return acc * element;
    }, 1)

    return array.map(element => prod/element);
}
// time complextity => O(N)
// space complextity =>> O(N)

const solution = productExpectThat([3,2,1])
console.log(solution);

function productArrayWithOutDivistion(array) {
    const newArray = [];
    let temp = 1;
    for(let i =0; i< array.length; i++) {
        newArray.push(temp);
        temp *= array[i];
    }
    // [1,1,2,6,24]

    temp = 1;
    for(let i = array.length - 1; i >= 0; i--) {
        newArray[i] *= temp;
        temp *= array[i];
    }
    // [120, 60, 40, 30, 24]
    return newArray;
}

//time => O(N)
//space => O(N)

const sol = productArrayWithOutDivistion([1, 2, 3, 4, 5])
console.log(sol)
