/* Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb". */

//       s
//     a b b c b         replaceCount = 1
//               e

//    maxLength => 2
//    replacedCount => 1
//    startChara => b
//    nextIndex => 3

function longestSubsctingWIthReplace(str, replaceCount) {

    let start = 0;
    let end = 1;
    let maxLength = 0;
    let replacedCount = 0;
    let startChara= str[start];
    let nextIndex = null;
    

    for(; end <= str.length;) {
        const endChara = str[end];

        if (startChara === endChara) {
            end++;
            const predictedLength = end - start + replaceCount - replacedCount;
            maxLength = Math.max(predictedLength, maxLength);
        } else {
            if (replacedCount < replaceCount) {
                if (nextIndex === null) nextIndex = end;
                replacedCount += 1;
                end++
            } else {
                const predictedLength = end - start + replaceCount - replacedCount;
                maxLength = Math.max(predictedLength, maxLength);
                if (nextIndex) {
                    start = nextIndex;
                    nextIndex = null;
                }
                replacedCount = 0;
                startChara= str[start];
                end = start + 1;
            }
            
        }
    }
    return maxLength;
}

// aabccbb k=2

function lognestSubstringWithReplace2(string, replaceLimit) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    const CharaCount = {};

    while(end < string.length) {
        const endChara = string[end];

        if (!(endChara in CharaCount)) {
            CharaCount[endChara] = 0;
        }
        CharaCount[endChara] += 1;

        const maxRepeatedCount = Math.max(maxRepeatedCount, CharaCount[endChara]);

        if ((end - start + 1 - maxRepeatedCount) > k) {
            const startChara = string[start];
            CharaCount[startChara] -= 1;
            start += 1;
        }
        maxLength = Math.max(maxLength, end - start + 1);
        end += 1;
    }
    return maxLength;
}