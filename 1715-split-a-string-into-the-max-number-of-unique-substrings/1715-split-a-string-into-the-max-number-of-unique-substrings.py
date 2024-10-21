class Solution:
    def maxUniqueSplit(self, s: str) -> int:
        # A helper function to perform backtracking
        def backtrack(start, seen):
            if start == len(s):
                return len(seen)  # If we reached the end of the string, return the size of the set
            
            max_splits = 0
            
            # Try to split the string in all possible ways starting from index `start`
            for end in range(start + 1, len(s) + 1):
                substring = s[start:end]
                
                # Only continue if the substring is unique (i.e., not in the set)
                if substring not in seen:
                    seen.add(substring)  # Add the substring to the set
                    # Recursively split the remaining part of the string
                    max_splits = max(max_splits, backtrack(end, seen))
                    seen.remove(substring)  # Backtrack (remove the substring from the set)
            
            return max_splits
        
        # Start backtracking from the beginning of the string with an empty set
        return backtrack(0, set())
