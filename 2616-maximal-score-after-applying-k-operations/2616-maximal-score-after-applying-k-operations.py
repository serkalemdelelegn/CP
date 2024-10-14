import heapq

class Solution:
    def maxKelements(self, nums: List[int], k: int) -> int:
        # Convert nums into a max-heap by negating the values
        max_heap = [-num for num in nums]
        heapq.heapify(max_heap)
        
        score = 0
        
        for _ in range(k):
            # Extract the maximum element (which is the smallest negative element)
            max_value = -heapq.heappop(max_heap)
            
            # Add the maximum value to the score
            score += max_value
            
            # Compute the new value as ceil(max_value / 3) and push back into heap
            new_value = (max_value + 2) // 3  # This computes ceil(max_value / 3)
            heapq.heappush(max_heap, -new_value)
        
        return score
