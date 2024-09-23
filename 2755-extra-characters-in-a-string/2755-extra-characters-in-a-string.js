/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const n = s.length;
    const dictSet = new Set(dictionary);  // Convert dictionary to a set for faster lookups
    const dp = new Array(n + 1).fill(Infinity);  // DP table initialized to Infinity
    dp[0] = 0;  // No extra characters for an empty string
    
    // Fill the dp table
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;  // Assume the current character is extra
        
        // Check all possible substrings ending at i
        for (let j = i - 1; j >= 0; j--) {
            const substr = s.substring(j, i);
            if (dictSet.has(substr)) {
                dp[i] = Math.min(dp[i], dp[j]);
            }
        }
    }
    
    return dp[n];  // The result is the minimum extra characters for the entire string
};
