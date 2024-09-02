#include <vector>
#include <numeric>

using namespace std;

class Solution {
public:
    int chalkReplacer(vector<int>& chalk, long long k) {
        long long total_chalk = accumulate(chalk.begin(), chalk.end(), 0LL);  // Step 1
        k %= total_chalk;  // Step 2
        
        for (int i = 0; i < chalk.size(); ++i) {  // Step 3
            if (k < chalk[i]) {
                return i;
            }
            k -= chalk[i];
        }
        
        return -1;  // This line should never be reached, added to prevent compilation errors.
    }
};
