class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        # Step 1: Calculate the maximum possible OR value
        max_or = 0
        for num in nums:
            max_or |= num  # Max OR of all elements
        
        # Step 2: Count subsets that achieve the maximum OR
        count = 0
        
        # There are 2^n subsets, we use a bitmask to generate all subsets
        n = len(nums)
        for mask in range(1, 1 << n):  # 1 << n is 2^n, we skip mask 0 because it corresponds to the empty set
            current_or = 0
            for i in range(n):
                if mask & (1 << i):  # Check if the i-th element is included in this subset
                    current_or |= nums[i]
            if current_or == max_or:
                count += 1
        
        return count
