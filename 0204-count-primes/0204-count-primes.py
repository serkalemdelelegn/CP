class Solution:
    def countPrimes(self, n: int) -> int:
        is_prime = [True] * n
        count = 0
        
        i = 2
        while i * i < n:
            if is_prime[i]:
                for j in range(i * i, n, i):
                    is_prime[j] = False
            i += 1
        
        for i in range(2, n):
            if is_prime[i]:
                count += 1
        
        return count
