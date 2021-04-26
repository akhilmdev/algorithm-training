/* 
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.


  0  1  2  3  4  5  6  7  8  9  10 11
                 s
 [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]
                                  e

  maxLength = 6
  onesCount = 4
*/
function lognestOnesAfterReplacement(arr, replaceCount) {
    let end = 0;
    let start = 0;
    let maxLength = 0;
    const onesCount = 0;

    while(end < arr.length) {
        const endChara = arr[end];

        if (endChara) {
            onesCount += 1;
        } else {
            while((end - start + 1 - onesCount) > replaceCount) {
                const startChara = arr[start];
                if (startChara) onesCount -= 1;
                start += 1;
            }
        }
        maxLength = Math.max(maxLength, end - start + 1);
        end += 1;
    }
    return maxLength
}