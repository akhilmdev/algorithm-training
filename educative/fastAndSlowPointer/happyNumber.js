// Problem Statement #
// Any number will be called a happy number if, after repeatedly replacing it
// with a number equal to the sum of the square of all of its digits, leads us to 
// number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they 
// will be stuck in a cycle of numbers which does not include ‘1’.

// Example 1:

// Input: 23   
// Output: true (23 is a happy number)  
// Explanations: Here are the steps to find out that 23 is a happy number:
// 4 + 9 = 13
// 1 + 9 = 10
// 1 + 0 = 1 

// Example 2:

// Input: 12   
// Output: false (12 is not a happy number)  
// Explanations: Here are the steps to find out that 12 is not a happy number:

// 1 + 4 = 5
// 25 = 25
// 4 + 25 = 29
// 4 + 81 = 85
// 64 + 25 = 89
// 64 + 81 = 145
// 1 + 16 + 25 = 42
// 16 + 4 = 20
// 4 + 0 = 4
// 16 = 16
// 1 + 36 = 37
// 9 + 49 = 58
// 25 + 64 = 89

function happyNumber(number) {
    let isHappyNumber = false;
    let digitSqureSum = number;
    const digitSqureSums = {};

    while (!(digitSqureSum in digitSqureSums)) {
        digitSqureSums[digitSqureSum] = true;
        
        let sum = 0;
        while (digitSqureSum > 0) {
            const lastDigit = digitSqureSum % 10;
            digitSqureSum = Math.floor(digitSqureSum / 10);
            sum += lastDigit * lastDigit;
        }
        digitSqureSum = sum;
        if (digitSqureSum === 1) {
            isHappyNumber = true;
            break;
        }
    }
    return isHappyNumber;
}

// Time => O(m);
// Space => O(m)

function findHappyNumber(number) {
    let slow = num;
    let fast = num;
    while (true) {
        slow = findSqureSum(number);
        fast = findSqureSum(findSqureSum(number));
        if (slow === fast) break;
    }
}

function findSqureSum(number) {
    sum = 0;
    while(number > 0) {
        const digit = number % 10;
        sum += digit * digit;
        number = Math.florr(number / 10);
    }
    return sum;
}

console.log(happyNumber(12));
console.log(happyNumber(100));

// Time => O(log N)
// Space => O(1)