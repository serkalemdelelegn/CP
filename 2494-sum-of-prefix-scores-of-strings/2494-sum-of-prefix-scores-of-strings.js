class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0; // To count the number of words sharing this prefix
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;  // Increment the prefix count for this node
        }
    }
    
    getPrefixScore(word) {
        let node = this.root;
        let score = 0;
        for (const char of word) {
            if (!node.children[char]) break;
            node = node.children[char];
            score += node.count;  // Add the count of words sharing this prefix
        }
        return score;
    }
}

/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
    const trie = new Trie();
    const result = [];
    
    // Step 1: Insert all words into the Trie
    for (const word of words) {
        trie.insert(word);
    }
    
    // Step 2: Calculate the score for each word
    for (const word of words) {
        result.push(trie.getPrefixScore(word));
    }
    
    return result;
};
