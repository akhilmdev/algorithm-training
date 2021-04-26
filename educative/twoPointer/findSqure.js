// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

function findSqure(arr) {
    let end = 0;
    let start = 0;
    const squreArrary = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            end = i + 1;
            start = i;
            break;
        }
    }

    while (end < arr.length || start >= 0) {
        const endSqure = arr[end] * arr[end];
        const startSqure = arr[start] * arr[start];
        if (startSqure > endSqure) {
            if (!isNaN(endSqure)) squreArrary.push(endSqure);
            if (!isNaN(startSqure)) squreArrary.push(startSqure);
        } else {
            if (!isNaN(startSqure)) squreArrary.push(startSqure);
            if (!isNaN(endSqure)) squreArrary.push(endSqure);
        }
        start -= 1;
        end += 1;
    }
    return squreArrary;
}

function findsqure1(arr) {
    let end = arr.length, start = 0, rightMostIndex = arr.length - 1;
    const squreArray = [];

    while (end >= start && rightMostIndex >= 0) {
        const endSqure = arr[end - 1] * arr[end - 1];
        const startSqure = arr[start] * arr[start];
        if (endSqure > startSqure) {
            squreArray[rightMostIndex] = endSqure;
            end -= 1;
        } else {
            squreArray[rightMostIndex] = startSqure;
            start += 1;
        }
        rightMostIndex -= 1;
    }
    return squreArray;
}