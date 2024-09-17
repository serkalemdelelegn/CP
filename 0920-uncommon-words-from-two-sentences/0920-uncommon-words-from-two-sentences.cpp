#include <vector>
#include <string>
#include <unordered_map>
#include <sstream>

class Solution {
public:
    std::vector<std::string> uncommonFromSentences(std::string s1, std::string s2) {
        std::unordered_map<std::string, int> wordCount;
        std::vector<std::string> result;

        // Helper function to split and count words
        auto countWords = [&](std::string sentence) {
            std::stringstream ss(sentence);
            std::string word;
            while (ss >> word) {
                wordCount[word]++;
            }
        };

        // Count words from both sentences
        countWords(s1);
        countWords(s2);

        // Find uncommon words
        for (const auto& entry : wordCount) {
            if (entry.second == 1) {
                result.push_back(entry.first);
            }
        }

        return result;
    }
};
