#include <iostream>
#include <vector>
#include <string>
#include <set>
#include <algorithm>

using namespace std;

class Solution {
public:
    string longestWord(vector<string>& words) {
        sort(words.begin(), words.end());  // Sort words lexicographically
        set<string> built;
        string result = "";

        built.insert("");  // Start with an empty string in the set
        
        for (const string& word : words) {
            // If the prefix of the current word (word without the last character) is in the set
            if (built.find(word.substr(0, word.size() - 1)) != built.end()) {
                built.insert(word);  // Add the word to the set
                // If it's longer or lexicographically smaller, update result
                if (word.size() > result.size() || (word.size() == result.size() && word < result)) {
                    result = word;
                }
            }
        }
        
        return result;
    }
};
