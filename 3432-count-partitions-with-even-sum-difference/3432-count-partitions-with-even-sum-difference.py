class Solution:
    def countPartitions(self, nums: List[int]) -> int:
        total = sum(nums)
        n = len(nums)
        
        if total % 2 == 0:
            return n - 1
        else:
            return 0
