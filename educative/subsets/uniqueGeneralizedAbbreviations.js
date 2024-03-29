// Given a word, write a function to generate all of its unique generalized abbreviations.

// Generalized abbreviation of a word can be generated by replacing each substring of the
// word by the count of characters in the substring. Take the example of “ab” which has
// four substrings: “”, “a”, “b”, and “ab”. After replacing these substrings in the actual
// word by the count of characters we get all the generalized abbreviations: “ab”, “1b”, “a1”, and “2”.

// Example 1:

// Input: "BAT"
// Output: "BAT", "BA1", "B1T", "B2", "1AT", "1A1", "2T", "3"
// Example 2:

// Input: "code"
// Output: "code", "cod1", "co1e", "co2", "c1de", "c1d1", "c2e", "c3", "1ode", "1od1", "1o1e", "1o2", 
// "2de", "2d1", "3e", "4"

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Que {
    constructor(head) {
        this.head = head;
        this.current = head;
    }

    push(value) {
        this.current.next = value;
    }

    pop() {
        const top = this.head;
        this.head = this.head.next;
        top.next = null;
        return top;
    }
}

class Words {
    constructor(str, limit, count) {
        this.str = str;
        this.limit = limit;
        this.count = count;
    }
}

function uniqueGeneralizedAbbreviations(str) {
    const result = [];
    let subResult = [new Words('', 0, 0)];

    while (subResult.length !== 0) {
        const currentEle = subResult.shift();

        if (currentEle.limit === str.length) {
            if (currentEle.count > 0) currentEle.str += currentEle.count;
            result.push(currentEle.str);
        } else {

            subResult.push(new Words(currentEle.str, currentEle.limit + 1, currentEle.count + 1));

            if (currentEle.count > 0) {
                currentEle.str += currentEle.count;
            }

            subResult.push(new Words(currentEle.str + str[currentEle.limit], currentEle.limit + 1, 0));
        }
    }
    console.log(result);
    return result;
}

// Time => O(N * 2^N)
// spce => O(N * 2 ^ N)

uniqueGeneralizedAbbreviations('CODE')