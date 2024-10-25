class Solution:
    def numSteps(self, s: str) -> int:
        # Convert binary string to integer
        num = int(s, 2)
        steps = 0
        
        # Perform steps until num becomes 1
        while num > 1:
            if num % 2 == 0:
                num //= 2
            else:
                num += 1
            steps += 1
        
        return steps
