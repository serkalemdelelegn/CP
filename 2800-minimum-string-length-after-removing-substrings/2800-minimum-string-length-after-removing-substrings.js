var minLength = function(s) {
    let stack = [];
    
    for (let char of s) {
        // Check the top of the stack and the current character
        if (stack.length > 0 && ((stack[stack.length - 1] === 'A' && char === 'B') || 
                                  (stack[stack.length - 1] === 'C' && char === 'D'))) {
            // Remove the last element since it forms "AB" or "CD"
            stack.pop();
        } else {
            // Push the character to the stack
            stack.push(char);
        }
    }
    
    // The remaining elements in the stack form the final string
    return stack.length;
};
