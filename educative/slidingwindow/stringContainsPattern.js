/*
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Input: String="odicf", Pattern="dc"

*/

function stringContainsPattern(str, pattern) {
    let end = 0;
    let patternCopy = pattern;
    let hasPattern = false;

    while(end < str.length && patternCopy.length) {
        if (pattern.includes(str[end])) {
            patternCopy = patternCopy.replace(str[end], '');
            if (!patternCopy.length) hasPattern = true;
        } else {
            patternCopy = pattern;
        }
        end += 1;
    }
    return hasPattern;
}

// time => O(N * K);
// space => O(1);

// Input: String="oidbcaf", Pattern="abc"

function stringContainsPattern1(str, pattern) {
    let start = 0;
    let end = 0;
    let match = 0;
    const charaMap = {};

    for(let i = 0; i < pattern.length; i++) {
        if (pattern[i] in charaMap) {
            charaMap[pattern[i]] += 1;
        } else {
            charaMap[pattern[i]] = 1;
        }
    }

    while(end < str.length) {
        const endChara = str[end];
        if (charaMap[endChara]) charaMap[endChara] -= 1;
        if (charaMap[endChara] === 0) match += 1;

        if (match === Object.keys(charaMap).length) return true;

        if (end > pattern.length - 1) {
            const startChara = str[start];
            if (charaMap[startChara]) charaMap[startChara] += 1;
            if (charaMap[startChara] === 0) match -= 1;
            start += 1;
        }

        end += 1;
    }
    return false;

}

time => O(M + N)
space => O(M)
