from typing import List

class Solution:
    def removeSubfolders(self, folder: List[str]) -> List[str]:
        # Step 1: Sort folders lexicographically
        folder.sort()
        
        # Step 2: Initialize result list and the current root
        result = []
        current_root = ""
        
        # Step 3: Iterate over the sorted folders
        for f in folder:
            # Check if f is not a subfolder of the current_root
            if not current_root or not f.startswith(current_root + "/"):
                result.append(f)   # Add f to result as a top-level folder
                current_root = f   # Update current_root to the new folder
        
        return result
