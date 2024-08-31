#include <vector>
#include <algorithm>
#include <cstdlib>  // For abs()

using namespace std;

class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());  // Sort the array
        int n = nums.size();
        int closestSum = nums[0] + nums[1] + nums[2];  // Initialize with the sum of the first three elements

        for (int i = 0; i < n - 2; ++i) {
            int left = i + 1;
            int right = n - 1;

            while (left < right) {
                int currentSum = nums[i] + nums[left] + nums[right];
                if (abs(currentSum - target) < abs(closestSum - target)) {
                    closestSum = currentSum;
                }

                if (currentSum < target) {
                    ++left;  // Move the left pointer to increase the sum
                } else if (currentSum > target) {
                    --right;  // Move the right pointer to decrease the sum
                } else {
                    return currentSum;  // Exact match found
                }
            }
        }

        return closestSum;
    }
};
