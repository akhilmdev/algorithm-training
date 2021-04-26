
// Input: String="catfoxcat", Words=["cat", "fox"]
// Output: [0, 3]
// Explanation: The two substring containing both the words are "catfox" & "foxcat".


function concatenationWithoutOverlapping(str, words) {
    let end = 0;
    let start = 0;
    let match = 0;
    let wordStart = 0;
    const wordsMap = {};
    const returnIndices = [];
    const wordLength = words[0].length;

    for(let i =0; i < words.length; i++) {
        if (!(words[i] in wordsMap)) wordsMap[words[i]] = 0;
        wordsMap[words[i]] += 1;
    } // { cat: 1, fox: 1 }


    while(end < str.length) {
        
        const substring = str.substring(wordStart, end + 1);
        if (substring in wordsMap) {
            if (wordsMap[substring]) {
                wordsMap[substring] -= 1;
                if (wordsMap[substring] >= 0) match += 1;
            } else if (wordsMap[substring] === 0) {
                start = wordStart;
            }
            wordStart = end + 1;
            if (match === words.length) {
                returnIndices.push(start);
            }
            
            if (end - start + 1 >= (wordLength * words.length)) {
                while(match === words.length) {
                    const firstSubstring = str.substring(start, start + wordLength);
                    if (wordsMap[firstSubstring] === 0) match -= 1;
                    wordsMap[firstSubstring] += 1;
                    start = start + wordLength;
                }
            }
        }
        if (end - wordStart + 1 >= wordLength) {
            wordStart += 1;
            start = wordStart;
        }
        end += 1;
    }
    return returnIndices
}