from typing import List

class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        def check(num):
            for i in str(num):
                if not int(i) or num % int(i):
                    return False
            return True
        
        ans = []
        for i in range(left, right + 1):
            if check(i):
                ans.append(i)
        return ans


sol = Solution()
print(sol.selfDividingNumbers(1, 22))  
print(sol.selfDividingNumbers(47, 85)) 
