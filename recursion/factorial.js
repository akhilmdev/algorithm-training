function findFactorial(number) {
    if (typeof number !== 'number') return 'Please provide a number';
    if (number === 0) return 1;
    if (number === 2) return number;

    return number * findFactorial(--number);
}

const factorial = findFactorial(5);
console.log(factorial)