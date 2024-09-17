/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Map to store the Roman numeral values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    // Traverse the string
    for (let i = 0; i < s.length; i++) {
        // If the current numeral is smaller than the next one, subtract its value
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]];
        } else {
            // Otherwise, add its value
            total += romanMap[s[i]];
        }
    }

    return total;
};
