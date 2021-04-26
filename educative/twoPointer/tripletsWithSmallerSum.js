// Input: [-1, 0, 2, 3], target=3 
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// Input: [-1, 4, 2, 1, 3], target=5 
// Output: 4
// Explanation: There are four triplets whose sum is less than the target: 
//    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

function TripletWithSmallerSum(arr, traget) {
    arr.sort((a,b) => a-b); //[-1, 1, 2, 3, 4] O(N)
    let totalCount = 0;
    const triplets = [];

    for (let i = 0; i < arr.length; i++) { 
        let start = i + 1;
        let end = arr.length - 1;

        while(start < end) {
            const sum = arr[i] + arr[start] + arr[end];
            if (sum < traget) {
                totalCount += end - start;
                // For geting triplets time complexty become O(N^3)
                                                        let startIndex = start;
                                                        while (startIndex < end) {
                                                            triplets.push([arr[i], arr[startIndex], arr[end]]);
                                                            startIndex += 1;
                                                        }
                start += 1;
            } else {
                end -= 1;
            }
        }
    }
    return {totalCount, triplets};
}

// Time => O(N^2)
// Space => O(N)