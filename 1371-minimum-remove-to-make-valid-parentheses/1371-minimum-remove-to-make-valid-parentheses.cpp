#include <string>

using namespace std;

class Solution {
public:
    string minRemoveToMakeValid(string s) {
        string result;
        int balance = 0;

        // First pass: Remove unmatched ')' parentheses
        for (char c : s) {
            if (c == '(') {
                balance++;
            } else if (c == ')') {
                if (balance == 0) continue;  // Skip unmatched ')'
                balance--;
            }
            result += c;  // Add the character to result
        }

        // Second pass: Remove unmatched '(' parentheses
        string final_result;
        balance = 0;
        for (int i = result.length() - 1; i >= 0; --i) {
            if (result[i] == '(' && balance == 0) continue;  // Skip unmatched '('
            if (result[i] == ')') {
                balance++;
            } else if (result[i] == '(') {
                balance--;
            }
            final_result += result[i];  // Add the character to final_result
        }

        // Reverse the final_result because we were iterating from the end in the second pass
        reverse(final_result.begin(), final_result.end());
        return final_result;
    }
};
