class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        result = 1
        while result % 2 != 0 or result % n != 0:
            result += 1
        return result


sol = Solution()
result = sol.smallestEvenMultiple(5)  
print(result)
