from collections import defaultdict
from typing import List

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = defaultdict(int)
        ans = 0
        
        for num in nums:
            ans += count[num]
            count[num] += 1
            
        return ans
