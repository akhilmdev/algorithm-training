// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

// Input: String="abbcabc", Pattern="abc"


function ProblemChallenge2(str, pattern) {
    let end = 0;
    let start = 0;
    let patternStart = [];
    const charaMap = {};
    let match = 0;

    for (let i = 0; i < pattern.length; i++) {
        if (!(pattern[i] in charaMap)) {
            charaMap[pattern[i]] = 0;
        }
        charaMap[pattern[i]] += 1;
    }

    while (end < str.length) {
        const endChara = str[end];

        if (endChara in charaMap) {
            if (charaMap[endChara]) {
                charaMap[endChara] -= 1;
            } else {
                const startChara = str[start];
                if (charaMap[startChara] === 0) match -= 1;
                charaMap[startChara] += 1;
                start += 1;
                continue;
            }

            if (charaMap[endChara] === 0) match += 1;
            if (match === Object.keys(charaMap).length) {
                patternStart.push(start);
                const startChara = str[start];
                if (charaMap[startChara] === 0) match -= 1;
                charaMap[startChara] += 1;
                start += 1;
            }
        }
        end += 1;
    }
    return patternStart;
}

// Time => O(M + N);
// Space => O(M)