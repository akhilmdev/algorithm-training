// For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

// Example 1:

// Input: N=2
// Output: (()), ()()
// Example 2:

// Input: N=3
// Output: ((())), (()()), (())(), ()(()), ()()()

class ParenthesesString {
    constructor(str, openCount, closeCount) {
        this.str = str;
        this.openCount = openCount;
        this.closeCount = closeCount;
    }
}

function BalancedParentheses(limit) {
    const results = [];
    let subArray = [new ParenthesesString('', 0, 0)];

    while (subArray.length > 0) {

        const current = subArray.shift();

        if (current.openCount === limit && current.closeCount === limit) {
            results.push(current.str);
        }

        if (current.openCount < limit) {
            subArray.push(new ParenthesesString(current.str + '(', current.openCount + 1, current.closeCount));
        }

        if (current.openCount > current.closeCount) {
            subArray.push(new ParenthesesString(current.str + ')', current.openCount, current.closeCount + 1))
        }

    }
    console.log(results)
    return results;
}

// Time => O(N * 2 ^ N)
// Space => O(N * 2 ^ N)

BalancedParentheses(4)