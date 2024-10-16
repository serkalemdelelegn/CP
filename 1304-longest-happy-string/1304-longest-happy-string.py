import heapq

class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        # Create a max heap with (count, character) tuples.
        # We use negative counts because heapq in Python is a min-heap.
        max_heap = []
        if a > 0:
            heapq.heappush(max_heap, (-a, 'a'))
        if b > 0:
            heapq.heappush(max_heap, (-b, 'b'))
        if c > 0:
            heapq.heappush(max_heap, (-c, 'c'))
        
        result = []
        
        while max_heap:
            # Get the character with the highest remaining count
            count1, char1 = heapq.heappop(max_heap)
            
            # If the last two characters in the result are the same as char1, we need to avoid using it
            if len(result) >= 2 and result[-1] == result[-2] == char1:
                if not max_heap:
                    break  # No other characters available, stop
                count2, char2 = heapq.heappop(max_heap)
                # Use the second most frequent character (char2)
                result.append(char2)
                count2 += 1  # Decrease its usage (remember count is negative)
                if count2 < 0:
                    heapq.heappush(max_heap, (count2, char2))
                # Push back the first character to the heap since we didn't use it
                heapq.heappush(max_heap, (count1, char1))
            else:
                # Otherwise, use the most frequent character (char1)
                result.append(char1)
                count1 += 1  # Decrease its usage (remember count is negative)
                if count1 < 0:
                    heapq.heappush(max_heap, (count1, char1))
        
        return ''.join(result)
