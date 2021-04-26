/**Implement regular expression matching with the following special characters:
 * 
 * - . (period) which matches any single character
 * - * (asterisk) which matches zero or more of the preceding element
 * 
 * That is, implement a function that takes in a string and a valid regular expression and
 * returns whether or not the string matches the regular expression.
 * 
 * For example, given the regular expression "ra." and the string "ray",
 * your function should return true. The same regular expression on the string
 * "raymond" should return false.
 * 
 * Given the regular expression ".*at" and the string "chat",
 * your function should return true. The same regular expression on the string "chats"
 * should return false.
 * 
 */


 function regexGenerator(stringData, regex) {
    let isValid = true;
    let dataCurrentIndex = 0;
    let regexCurrentIndex = 0;

    for (; regexCurrentIndex < regex.length; regexCurrentIndex++) {
        if (regex[regexCurrentIndex] === '.' && !stringData[dataCurrentIndex]) {
            isValid = false;
        }

        if (regex[regexCurrentIndex] === '*') {
            while(stringData[dataCurrentIndex] && regex[regexCurrentIndex + 1] === stringData[dataCurrentIndex]) {

            }
        }
    }





    for (; (index < regex.length && isValid); index++) {
        if (regex[index] === '.' && !stringData[index]) {
            isValid = false;
        }
        if (regex[index] === '*') {
            for (let j = 0; i < stringdat)
            isValid = false
        }
    }
    if (stringData[index]) isValid = false;
    return isValid;
 }

 // Time  = O(n)
 // Space = O(1)

 const isValid = regexGenerator('chats', '.*at');
 console.log(isValid);