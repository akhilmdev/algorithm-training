// Gray code is a binary code where each successive value differ in only one bit,
// as well as when wrapping around. Gray code is common in hardware so that we
// don't see temporary spurious values during transitions.

// Given a number of bits n, generate a possible gray code for it.

// For example, for n = 2, one gray code would be [00, 01, 11, 10].

function generateGrayCode(n) {

    const arr = [];
    arr.push('0');
    arr.push('1');

    let i;
    for(i = 2; i < (1<<n); i = i<<1) {
        console.log(i)
        for(let j = i-1; j >= 0; j--) {
            arr.push(arr[j]);
        }

        for(let j = 0; j < i; j++) {
            arr[j] = '0' + arr[j];
        }
        
        for(let j = i; j < 2*i; j++) {
            arr[j] = '1' + arr[j];
        }

    }

    console.log(arr)
    return arr;

}

// Time => O(2^n)
// Space => O(2^n)
generateGrayCode(2)
generateGrayCode(3)