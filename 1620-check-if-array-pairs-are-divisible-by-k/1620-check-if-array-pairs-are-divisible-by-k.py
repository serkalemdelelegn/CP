class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        remainder_count = [0] * k
        
        # Step 1: Calculate the remainder for each element and count the frequency of each remainder
        for num in arr:
            remainder = num % k
            if remainder < 0:  # Handling negative remainders
                remainder += k
            remainder_count[remainder] += 1
        
        # Step 2: Check if we can form valid pairs
        for i in range(k):
            if i == 0:
                # Remainders of 0 need to be paired with themselves, so count must be even
                if remainder_count[0] % 2 != 0:
                    return False
            else:
                # For remainder i, we must have the same number of elements with remainder k - i
                if remainder_count[i] != remainder_count[k - i]:
                    return False
        
        return True
