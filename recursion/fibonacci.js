/**
 * 0 1 1 2 3 5 8 13 21 34...
 * 0 + 1 + getFibonacciAtIndex(2) + getFibonacciAtIndex(3) + getFibonacciAtIndex(4)
 */

function getFibonacciAtIndex(index) {
    if (typeof index !== 'number') return 'Please provide index(number)';

    if (index < 2) return index;

    return getFibonacciAtIndex(--index) + getFibonacciAtIndex(--index);

}

const returnNumber = getFibonacciAtIndex(Number(process.argv[2]));
console.log(returnNumber);