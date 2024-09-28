var findTheLongestSubstring = function(s) {
    let maxLen = 0; // To store the maximum length of the valid substring
    let state = 0; // Bitmask to track the parity of vowels (5 bits for 5 vowels)
    const seen = {0: -1}; // Hash map to store the first occurrence of each state
    const vowels = {'a': 1, 'e': 2, 'i': 4, 'o': 8, 'u': 16}; // Mapping of vowels to bitmask positions
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // If the character is a vowel, flip the corresponding bit in the state
        if (char in vowels) {
            state ^= vowels[char];
        }
        
        // If this state has been seen before, calculate the length of the substring
        if (state in seen) {
            maxLen = Math.max(maxLen, i - seen[state]);
        } else {
            // If this is the first time we see this state, store the index
            seen[state] = i;
        }
    }
    
    return maxLen;
};
