var maxWidthRamp = function(nums) {
    const stack = [];
    const n = nums.length;
    let maxWidth = 0;

    // First pass: Build the decreasing stack
    for (let i = 0; i < n; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }

    // Second pass: Traverse from right to left and find maximum width
    for (let j = n - 1; j >= 0; j--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
            maxWidth = Math.max(maxWidth, j - stack.pop());
        }
    }

    return maxWidth;
};

