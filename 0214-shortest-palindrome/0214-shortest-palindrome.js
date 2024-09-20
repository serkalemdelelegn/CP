/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    if (s.length === 0) return s;
    
    const reverse = s.split('').reverse().join('');
    const combined = s + "#" + reverse;
    
    const kmpTable = new Array(combined.length).fill(0);
    
    // Build KMP table
    for (let i = 1; i < combined.length; i++) {
        let j = kmpTable[i - 1];
        
        while (j > 0 && combined[i] !== combined[j]) {
            j = kmpTable[j - 1];
        }
        
        if (combined[i] === combined[j]) {
            j++;
        }
        
        kmpTable[i] = j;
    }
    
    // Longest palindrome prefix length
    const longestPalPrefixLen = kmpTable[combined.length - 1];
    
    // Adding reverse of the non-palindromic suffix in front of the string
    const toAdd = reverse.substring(0, s.length - longestPalPrefixLen);
    
    return toAdd + s;
};
