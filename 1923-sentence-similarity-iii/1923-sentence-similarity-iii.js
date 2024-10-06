var areSentencesSimilar = function(sentence1, sentence2) {
    // Step 1: Split both sentences into words
    const words1 = sentence1.split(" ");
    const words2 = sentence2.split(" ");
    
    // Step 2: Identify the longest common prefix
    let i = 0; // pointer for the prefix comparison
    while (i < words1.length && i < words2.length && words1[i] === words2[i]) {
        i++;
    }
    
    // Step 3: Identify the longest common suffix
    let j = 0; // pointer for the suffix comparison
    while (j < words1.length - i && j < words2.length - i && words1[words1.length - 1 - j] === words2[words2.length - 1 - j]) {
        j++;
    }
    
    // Step 4: Check if the remaining middle part can be ignored in one of the sentences
    return i + j === Math.min(words1.length, words2.length);
};
