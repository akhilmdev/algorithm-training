// Comparing Strings containing Backspaces (medium) #
// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

// Example 1:

// Input: str1="xy#z", str2="xzz#"
// Output: true
// Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
// Example 2:

// Input: str1="xy#z", str2="xyz#"
// Output: false
// Explanation: After applying backspaces the strings become "xz" and "xy" respectively.

const BACKSPACE_CHARA = '#';

function ComparingStringContainingBackspaces(str1, str2) {
    let strEqual = false;

    const string1afterBackspace = afterBackspace(str1);
    const string2afterBackspace = afterBackspace(str2);

    if (string1afterBackspace === string2afterBackspace) strEqual = true;

    return strEqual;
}

function afterBackspace(str) {
    let slide = 0;

    while (slide < str.length) {
        if (str[slide] === BACKSPACE_CHARA) {
            str = onBackspace(str, slide);
            slide -= 2;
        }
        slide += 1;
    }
    return str;
}

function onBackspace(str, index) {
    return str.replace(str[index - 1] + str[index], '');
}