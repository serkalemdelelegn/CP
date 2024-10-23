from collections import deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def replaceValueInTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        
        # Use a queue for BFS
        queue = deque([root])
        root.val = 0  # The root has no cousins
        
        while queue:
            level_size = len(queue)
            level_sum = 0
            current_level = []
            
            # First pass: collect all nodes in the current level and their sum
            for _ in range(level_size):
                node = queue.popleft()
                current_level.append(node)
                if node.left:
                    queue.append(node.left)
                    level_sum += node.left.val
                if node.right:
                    queue.append(node.right)
                    level_sum += node.right.val
            
            # Second pass: update each node with the sum of its cousins
            for node in current_level:
                sibling_sum = 0
                if node.left:
                    sibling_sum += node.left.val
                if node.right:
                    sibling_sum += node.right.val
                
                # Set each child's value as the sum of cousins (total level sum - sibling sum)
                if node.left:
                    node.left.val = level_sum - sibling_sum
                if node.right:
                    node.right.val = level_sum - sibling_sum
        
        return root
