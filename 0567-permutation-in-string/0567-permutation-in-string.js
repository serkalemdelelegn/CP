var checkInclusion = function(s1, s2) {
    // Step 1: Early return if s1 is longer than s2
    if (s1.length > s2.length) {
        return false;
    }
    
    // Step 2: Initialize frequency arrays
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
    
    // Fill in the frequency count for s1 and the first window in s2
    const aCharCode = 'a'.charCodeAt(0);
    
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - aCharCode]++;
        s2Count[s2.charCodeAt(i) - aCharCode]++;
    }
    
    // Step 3: Define a helper function to compare two frequency arrays
    const matches = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    };
    
    // Step 4: Slide the window over s2
    for (let i = s1.length; i < s2.length; i++) {
        if (matches(s1Count, s2Count)) {
            return true;
        }
        
        // Update the window: remove the character going out and add the character coming in
        s2Count[s2.charCodeAt(i - s1.length) - aCharCode]--; // Remove the outgoing character
        s2Count[s2.charCodeAt(i) - aCharCode]++; // Add the incoming character
    }
    
    // Check the last window after the loop
    return matches(s1Count, s2Count);
};
