// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
// count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
// '1234' => [1,2,3,4],[12,3,4],[1,23,4]
// '12322' => [1,2,3,2,2], [12,3,22], [1,23,22], [1,2,3,22]
function decodeMessage(message) {
    const memCache = [];
    return decodeMessageRecursive(message, 0, memCache);
}

function decodeMessageRecursive(message, startIndex, memCache) {
    let count = 0;
    if (startIndex >= message.length) return 1;

    if (!memCache[startIndex + 1]) memCache[startIndex + 1] = decodeMessageRecursive(message, startIndex + 1, memCache);

    count = memCache[startIndex + 1];
    if (message[startIndex] <= 2 && message[startIndex + 1] < 7) {
        count += memCache[startIndex + 2];
    }

    return count;
}

//time  => O(n)
//space => O(n)

// without memcache
function decodeMessageRecursiveNonCache(message, startIndex) {
    let count = 0;
    if (startIndex >= message.length) return 1;

    count = decodeMessageRecursive(message, startIndex + 1);;
    if (message[startIndex] <= 2 && message[startIndex + 1] < 7) {
        count += decodeMessageRecursive(message, startIndex + 2);;
    }

    return count;
}

// time  => O(2^n)
// space => O(1)


const messageCount = decodeMessage('2222');
console.log(messageCount)