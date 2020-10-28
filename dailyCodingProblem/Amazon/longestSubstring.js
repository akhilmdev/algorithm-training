/**
 * This problem was asked by Amazon.
 * Given an integer k and a string s, find the length of the longest substring that
 * contains at most k distinct characters.
 * 
 * For example, given s = "abcba" and k = 2,
 * the longest substring with k distinct characters is "bcb".
 * 
 * "aabbccd" => aabb => 4
 * "ababcd"  => abab => 4
 * 
 * 
 * 
 */

function longestSubstring(string, count) {
    let start = 0;
    let end = 0;
    const map = {};
    let maxLength = 0;

    while(end < string.length && start <= end) {
        maxLength = Math.max(maxLength, end - start);
        if (!map[string[end]])  {
            count--;
            map[string[end]] = end + 1;
            if (count < 0) {
                const tempStart = start;
                start += (map[string[start]] - 1 || 1);
                delete map[string[tempStart]];
                count++;
            }
        }
        
        end++;
    }

    return maxLength;
}

// time  => O(n)
// space => O(n)

console.log(longestSubstring('ababcd', 2))