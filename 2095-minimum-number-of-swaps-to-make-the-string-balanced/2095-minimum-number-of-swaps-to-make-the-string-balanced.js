var minSwaps = function(s) {
    let openCount = 0;  // Tracks the number of unmatched opening brackets
    let imbalance = 0;  // Tracks the maximum imbalance encountered

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            openCount++;  // Increase the count of open brackets
        } else {
            if (openCount > 0) {
                openCount--;  // A closing bracket is matched with an open bracket
            } else {
                imbalance++;  // An imbalance (more closing brackets) is encountered
            }
        }
    }
    
    // The number of swaps required is half of the maximum imbalance
    return Math.ceil(imbalance / 2);
};
