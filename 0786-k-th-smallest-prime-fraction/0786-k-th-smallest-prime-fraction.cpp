#include <vector>
#include <queue>
#include <utility>

using namespace std;

class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {
        auto compare = [&](pair<int, int>& a, pair<int, int>& b) {
            return arr[a.first] * arr[b.second] > arr[b.first] * arr[a.second];
        };
        
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(compare)> pq(compare);
        
        for (int i = 0; i < arr.size() - 1; ++i)
            pq.push({i, static_cast<int>(arr.size()) - 1});
        
        while (--k) {
            auto [i, j] = pq.top();
            pq.pop();
            
            if (j - 1 > i)
                pq.push({i, j - 1});
        }
        
        return {arr[pq.top().first], arr[pq.top().second]};
    }
};
