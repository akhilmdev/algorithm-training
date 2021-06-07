// Given a set of numbers that might contain duplicates, find all of its distinct subsets.

// Example 1:

// Input: [1, 3, 3]
// Output: [], [1], [3], [1,3], [3,3], [1,3,3]
// Example 2:

// Input: [1, 5, 3, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3] 

function subsetWithDuplicates(arr) {
    arr = arr.sort((a, b) => a - b)
    const subset = [];
    let prvEle = null;
    let currEle = null;
    let endIndex = 0;
    subset.push([]);

    for (let i = 0; i < arr.length; i++) {
        startIndex = 0;
        currEle = arr[i];

        if (prvEle === currEle) {
            startIndex = endIndex;
        }

        endIndex = subset.length;

        for (let j = startIndex; j < endIndex; j++) {
            const sub = subset[j].slice(0)

            sub.push(currEle)
            subset.push(sub);
        }

        prvEle = currEle;
    }
    console.log(subset)
    return subset;
}

// Time => O(n * 2 ^ n)
// Space => O(n * 2 ^ n)

subsetWithDuplicates([1, 3, 3])

subsetWithDuplicates([1, 5, 3, 3])