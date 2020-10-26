/**
* Implement an autocomplete system. That is, given a query string s and a set of all
* possible query strings, return all strings in the set that have s as a prefix. 
* For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal]. 
* Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

function PrefixQueryString(query, data) {
    const querryArray = [...query];
    const returnArray = [];
    for(let i = 0; i< data.length; i++) {
        let isPassed = true;
        for(let j = 0; j < querryArray.length; j++) {
            if (querryArray[j] !== data[i][j]) isPassed = false;
        }
        if (isPassed) returnArray.push(data[i]);
    }
    return returnArray
}

// time  => O(n)
// space => O(n)

console.log(PrefixQueryString('de', ['dog', 'deer', 'deal']))