// Given a string, find all of its permutations preserving the character sequence but changing case.

// Example 1:

// Input: "ad52"
// Output: "ad52", "Ad52", "aD52", "AD52" 
// Example 2:

// Input: "ab7c"
// Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"

function permutationByChangingCase(str) {

    const result = [];
    let subStrings = [];
    let index = 1;

    result.push(str[0]);
    if (isNaN(Number(str[0]))) result.push(str[0].toUpperCase());

    while (index < str.length) {
        const currentEle = str[index];

        while (result.length) {
            const ele = result.shift();

            subStrings.push(ele + currentEle);
            if (isNaN(Number(currentEle))) subStrings.push(ele + currentEle.toUpperCase());

        }

        result.push(...subStrings);
        subStrings = [];

        index += 1;
    }
    console.log(result)
    return result;
}

// Time => O(N * 2^N)
// Space => => O(N * 2^N)

permutationByChangingCase('ab7c')