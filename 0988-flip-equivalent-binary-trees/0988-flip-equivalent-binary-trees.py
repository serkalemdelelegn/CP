# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def flipEquiv(self, root1: TreeNode, root2: TreeNode) -> bool:
        # Base cases
        if not root1 and not root2:  # Both nodes are None, so they're trivially equivalent
            return True
        if not root1 or not root2:  # One is None and the other is not, so they're not equivalent
            return False
        if root1.val != root2.val:  # Nodes have different values
            return False
        
        # Recursively check if:
        # 1. The left and right children are identical without flips.
        # 2. The left and right children are identical with flips.
        return (self.flipEquiv(root1.left, root2.left) and self.flipEquiv(root1.right, root2.right)) or \
               (self.flipEquiv(root1.left, root2.right) and self.flipEquiv(root1.right, root2.left))
