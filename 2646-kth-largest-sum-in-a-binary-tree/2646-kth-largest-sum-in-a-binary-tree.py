from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthLargestLevelSum(self, root: TreeNode, k: int) -> int:
        if not root:
            return -1
        
        # Perform BFS to calculate the sum of each level
        level_sums = []
        queue = deque([root])
        
        while queue:
            level_size = len(queue)
            level_sum = 0
            for _ in range(level_size):
                node = queue.popleft()
                level_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level_sums.append(level_sum)
        
        # If there are fewer than k levels, return -1
        if len(level_sums) < k:
            return -1
        
        # Sort the level sums in descending order and return the k-th largest
        level_sums.sort(reverse=True)
        return level_sums[k - 1]
