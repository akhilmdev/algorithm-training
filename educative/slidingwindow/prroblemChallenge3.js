// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"
// abdbca
function smallestSubstringWithallChara(str, pattern) {
    let end = 0;
    let start = 0;
    const charaMap = {};
    let match = 0;
    let resultChara = ''
    let maxLength = 0;

    for(let i = 0; i < pattern.length; i++) {
        if (!charaMap[pattern[i]]) charaMap[pattern[i]] = 0;
        charaMap[pattern[i]] += 1;
    }

    while (end < str.length) {
        const endChara = str[end];
        if (endChara in charaMap) {
            if (charaMap[endChara]) {
                charaMap[endChara] -= 1;
                if (charaMap[endChara] >= 0) match += 1;
            }

            if (match === Object.key(charaMap).length) {
                if (minLength > end - start + 1) {
                    minLength = end - start + 1;
                    resultChara = str.substring(start, start + minLength);
                };
                let startChara = str[start];
                while(!charaMap[startChara]) {
                    if (startChara in charaMap) {
                        charaMap[startChara] += 1;
                        match -= 1;
                    }
                    start += 1;
                    startChara = str[start];
                }
                if (charaMap[startChara]) {
                    end = start;
                    continue;
                }
            }
            
        }
        end += 1;
    }
    return resultChara;
}

// Input: String="aabdec", Pattern="abc"
function ProblemChallenge3(str, pattern) {
    if (!pattern.length) return '';
    let end = 0;
    let start = 0;
    let match = 0;
    let resultString= '';
    const charaMap = {};

    for(let i = 0; i <pattern.length; i++) {
        if (!charaMap[pattern[i]]) {
            charaMap[pattern[i]] = 0;
        }
        charaMap[pattern[i]] += 1;
    }

    while(end < str.length) {
        const endChara = str[end];

        if (endChara in charaMap) {
            charaMap[endChara] -= 1;
            if (charaMap[endChara] >= 0 ) match += 1;
        }

        if (match === pattern.length) {
            resultString = str.substring(start, end + 1);
            
            while(match === pattern.length) {
                const startChara = str[start];
                if (charaMap[startChara] === 0) {
                    resultString = str.substring(start, end + 1);
                    match -= 1;
                }
                start += 1;
                charaMap[startChara] += 1;
            }
        }
        end += 1;
    }

    return resultString;
}