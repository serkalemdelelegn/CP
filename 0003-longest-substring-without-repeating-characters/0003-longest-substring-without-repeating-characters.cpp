#include <unordered_map>
#include <string>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> map;  // Hash map to store the last index of each character
        int maxLength = 0;  // Variable to store the maximum length of substring found
        int left = 0;  // Left pointer of the sliding window
        
        for (int right = 0; right < s.length(); ++right) {
            char currentChar = s[right];
            
            // If the character is already in the map and its index is within the current window
            if (map.find(currentChar) != map.end() && map[currentChar] >= left) {
                left = map[currentChar] + 1;  // Move the left pointer to exclude the repeated character
            }
            
            // Update the map with the current character's index
            map[currentChar] = right;
            
            // Calculate the current length of the substring and update the max length
            maxLength = max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
};
