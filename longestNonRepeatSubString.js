/***
 * "aabccd" => abc
 * output => 3
 * 
 * "abccde" => abc, cde
 * output => 3
 * 
 * "abcabed" => cabed
 * output => 5
 * 
 */

function getLongestNonRepeatSubString(string) {

    if (typeof string !== 'string') return 'Please provide a string';
    if (string === '' || !string.length) return string;

    let startIndex = 0;
    let endIndex = 0;
    const map = {};

    while(endIndex < string.length) {

        if (map[string[endIndex]]) {
            delete map[string[endIndex]];
            startIndex++;
        } else {
            map[string[endIndex]] = true;
            endIndex++; 
        }
    }
    return endIndex - startIndex - 1;
}

const substringLength = getLongestNonRepeatSubString('abccde');
console.log(substringLength)