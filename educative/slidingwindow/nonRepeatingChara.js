// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".
  // 0  1  2  3  4  5
  // a, b, c, c, d, e
  //          s     e

  // maxLength = 3;
  // charMap = {
  //     c: true,
  //     d: true,
  //     e: true
  // }

function nonRepeatingChara(str) {
  let end =0;
  let start = 0;
  let maxLength = 0;
  const charaMap = {}
  
  for (; end <= str.length; end++ ) {
  	const endString = str[end];
      maxLength = Math.max(end-start, maxLength);
    if (charaMap[endString]) {
      while (start < end) {
        if (str[start] !== str[end] ) delete charaMap[str[start]];
        start += 1;
      }
    } else {
      charaMap[endString] = true;
    }
  }
  return maxLength;
}
