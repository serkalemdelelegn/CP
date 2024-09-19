/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const memo = {};

    const ways = (exp) => {
        // If we have already computed the result for this expression, return it from memo
        if (memo[exp]) {
            return memo[exp];
        }
        
        const result = [];
        
        // Iterate through the expression
        for (let i = 0; i < exp.length; i++) {
            const char = exp[i];
            
            // If we find an operator, we split the expression
            if (char === '+' || char === '-' || char === '*') {
                // Recursively compute the left and right parts
                const left = ways(exp.substring(0, i));
                const right = ways(exp.substring(i + 1));
                
                // Combine the results of left and right using the current operator
                for (let l of left) {
                    for (let r of right) {
                        if (char === '+') {
                            result.push(l + r);
                        } else if (char === '-') {
                            result.push(l - r);
                        } else if (char === '*') {
                            result.push(l * r);
                        }
                    }
                }
            }
        }
        
        // If there were no operators, it's just a number
        if (result.length === 0) {
            result.push(parseInt(exp));
        }
        
        // Memoize the result for this expression
        memo[exp] = result;
        return result;
    };

    // Start the recursive computation
    return ways(expression);
};
