// [10, 3,5,7] k = 17 ==> return true
// [] , k =0 ==> true

function sumOfSubArray(array, total) {
    if (!array.length && !total === 0) return true;
    const map = {};
    let index = 0;
    let response = false;
    while(index < array.length) {
        if (map[array[index]]) {
            response = true;
            break;
        }
        map[total - array[index]] = true;
        index++;
    }

    return response;
}

const response = sumOfSubArray([10,3,5,7], 14);
console.log(response)