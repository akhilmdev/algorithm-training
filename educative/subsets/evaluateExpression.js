// Given an expression containing digits and operations (+, -, *), find all possible ways
// in which the expression can be evaluated by grouping the numbers and operators using parentheses.

// Example 1:

// Input: "1+2*3"
// Output: 7, 9
// Explanation: 1+(2*3) => 7 and (1+2)*3 => 9
// Example 2:

// Input: "2*3-4-5"
// Output: 8, -12, 7, -7, -3 
// Explanation: 2*(3-(4-5)) => 8, 2*(3-4-5) => -12, 2*3-(4-5) => 7, 2*(3-4)-5 => -7, (2*3)-4-5 => -3

function evaluateExpression(input) {
    const results = [];

    if (!input.includes('-') && !input.includes('+') && !input.includes('*')) {
        results.push(parseInt(input))
    } else {
        let i = 0
        while(i < input.length) {
            const chara = input[i];
            if (isNaN(chara)) {
                const leftChara = evaluateExpression(input.substring(0, i));
                const rightChara = evaluateExpression(input.substring(i + 1));

                for(let l = 0; l < leftChara.length; l++) {
                    for(let r = 0; r < rightChara.length; r++) {
                        let part1 = leftChara[l],
                            part2 = rightChara[r];

                        if(chara === '+') {
                            results.push(part1 + part2)
                        } else if (chara ==='-' ) {
                            results.push(part1 - part2)
                        } else if (chara === '*') {
                            results.push(part1 * part2)
                        }
                    }
                }
            }
            i += 1
        }
    }
    return results
}

// console.log(EvaluateExpression('1+2*3'))
console.log(evaluateExpression('2*3-4-5'))

function diff_ways_to_evaluate_expression(input) {
    const result = [];
    // base case: if the input string is a number, parse and add it to output.
    if (!(input.includes('+')) && !(input.includes('-')) && !(input.includes('*'))) {
      result.push(parseInt(input));
    } else {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (isNaN(parseInt(char, 10))) { // if not a digit
          // break the equation here into two parts and make recursively calls
          const leftParts = diff_ways_to_evaluate_expression(input.substring(0, i));
          const rightParts = diff_ways_to_evaluate_expression(input.substring(i + 1));
          for (let l = 0; l < leftParts.length; l++) {
            for (let r = 0; r < rightParts.length; r++) {
              let part1 = leftParts[l],
                part2 = rightParts[r];
              if (char === '+') {
                result.push(part1 + part2);
              } else if (char === '-') {
                result.push(part1 - part2);
              } else if (char === '*') {
                result.push(part1 * part2);
              }
            }
          }
        }
      }
    }
  
    return result;
  }

  console.log(diff_ways_to_evaluate_expression('2*3-4-5'))