/**This problem was asked by Facebook.
 * 
 * Given a string of round, curly, and square open and closing brackets,
 * return whether the brackets are balanced (well-formed).
 * 
 * For example, given the string "([])[]({})", you should return true.
 * 
 * Given the string "([)]" or "((()", you should return false. */

function completeBrakets(brakets) {
    if (brakets.length % 2 !== 0) return false;
    const braketMap = {
        '{': 1,
        '}': 1,
        '[': 2,
        ']': 2,
        '(': 3,
        ')': 3
    }

    let currentIndex = 0;
    const limit = brakets.length - 1;
    let isCompleteBrakets = true;

    while (currentIndex < (limit - currentIndex)) {
        console.log(brakets[currentIndex], brakets[limit - currentIndex])
        if (braketMap[brakets[currentIndex]] !== braketMap[brakets[limit - currentIndex]]) {
            isCompleteBrakets = false;
            break;
        }
        currentIndex++;
    }

    return isCompleteBrakets;
}

console.log(completeBrakets('{[({)]}'));
console.log(completeBrakets('{[({]}'));