class Solution {
public:
    int findMinDifference(vector<string>& timePoints) {
        vector<int> minutes; // To store the time in minutes
        
        // Convert each time point to minutes and store in the vector
        for (const string& time : timePoints) {
            int hours = stoi(time.substr(0, 2));
            int mins = stoi(time.substr(3, 2));
            minutes.push_back(hours * 60 + mins);
        }
        
        // Sort the vector of minutes
        sort(minutes.begin(), minutes.end());
        
        // Initialize the minimum difference with a large value
        int minDiff = INT_MAX;
        
        // Calculate the differences between consecutive time points
        for (int i = 1; i < minutes.size(); ++i) {
            minDiff = min(minDiff, minutes[i] - minutes[i - 1]);
        }
        
        // Handle the circular case: difference between the last and first time points
        int circularDiff = 1440 - (minutes.back() - minutes[0]);
        minDiff = min(minDiff, circularDiff);
        
        return minDiff;
    }
};
