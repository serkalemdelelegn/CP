#include <vector>

using namespace std;

class Solution {
public:
    int countStudents(vector<int>& students, vector<int>& sandwiches) {
        // Count the number of students who prefer each type of sandwich
        int count0 = 0, count1 = 0;
        for (int student : students) {
            if (student == 0) count0++;
            else count1++;
        }

        // Process the sandwiches
        for (int sandwich : sandwiches) {
            if (sandwich == 0) {
                if (count0 > 0) count0--;  // A student who prefers 0 eats the sandwich
                else return count1;        // No student prefers 0, return remaining count of 1s
            } else {
                if (count1 > 0) count1--;  // A student who prefers 1 eats the sandwich
                else return count0;        // No student prefers 1, return remaining count of 0s
            }
        }

        // All students managed to eat their preferred sandwich
        return 0;
    }
};
