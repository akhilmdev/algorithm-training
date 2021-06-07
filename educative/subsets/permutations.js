// Given a set of distinct numbers, find all of its permutations.

// Permutation is defined as the re-arranging of the elements of the set.
// For example, {1, 2, 3} has the following six permutations:

// {1, 2, 3}
// {1, 3, 2}
// {2, 1, 3}
// {2, 3, 1}
// {3, 1, 2}
// {3, 2, 1}
// If a set has ‘n’ distinct elements it will have n!n! permutations.

// Example 1:

// Input: [1,3,5]
// Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]


function permutations(arr) {

    const permutationArray = [[arr[0]]];
    let permutationArr = [];

    arr.forEach((element, index) => {
        while (index !== 0 && permutationArray.length !== 0) {
            const unshiftElement = permutationArray.shift();
            let j = index;
            while (j >= 0) {
                const cloneArr = [...unshiftElement]
                cloneArr.splice(j, 0, element);
                permutationArr.push(cloneArr);
                j -= 1;
            }
        }
        permutationArray.push(...permutationArr)
        permutationArr = []

    })
    console.log(permutationArray)
    return permutationArray;
}

// time => O(N*N!)
// space => O(N*N!)

permutations([1, 2, 3])