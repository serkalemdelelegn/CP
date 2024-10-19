class Solution:
    def findKthBit(self, n: int, k: int) -> str:
        # Helper function to find the kth bit in Sn
        def find_kth_bit(n, k):
            if n == 1:
                return '0'  # Base case: S1 is "0"
            
            length = (1 << n) - 1  # Length of Sn = 2^n - 1
            mid = length // 2 + 1  # The middle element in Sn
            
            if k == mid:
                return '1'  # The middle element is always '1'
            elif k < mid:
                return find_kth_bit(n - 1, k)  # It's in the first half
            else:
                # It's in the second half, we need to find the mirrored position in the first half
                mirror_pos = length - k + 1
                # Find the bit in the mirrored position and invert it
                return '1' if find_kth_bit(n - 1, mirror_pos) == '0' else '0'
        
        # Call the helper function to find the kth bit in Sn
        return find_kth_bit(n, k)
