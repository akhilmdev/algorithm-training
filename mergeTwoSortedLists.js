// with splice
function mergeTwoSortedLists(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let mergeArray = [];

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            mergeArray.push(right[rightIndex]);
            rightIndex++;
        } else {
            mergeArray.push(left[leftIndex]);
            leftIndex++;
        }
    }
    mergeArray = mergeArray.concat(left.splice(leftIndex)).concat(right.splice(rightIndex));
    return mergeArray;
}

// without splice
function mergeTwoSortedLists2(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let mergeArray = [];

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > right[rightIndex]) {
            mergeArray.push(right[rightIndex]);
            rightIndex++;
        } else {
            mergeArray.push(left[leftIndex]);
            leftIndex++;
        }
    }

    while(leftIndex < left.length) {
        mergeArray.push(left[leftIndex]);
            leftIndex++;
    }
    while(rightIndex < right.length) {
        mergeArray.push(right[rightIndex]);
        rightIndex++;
    }
    return mergeArray;
}

const merge = mergeTwoSortedLists2([1,2,6], [0,2,4,5,7])
console.log(merge)