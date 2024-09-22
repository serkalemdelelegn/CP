/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    // Helper function to count the number of numbers with the current prefix
    const countSteps = (prefix, n) => {
        let current = prefix;
        let next = prefix + 1;
        let steps = 0;
        while (current <= n) {
            steps += Math.min(n + 1, next) - current;
            current *= 10;
            next *= 10;
        }
        return steps;
    };

    let curr = 1;
    k--; // As we're starting from 1, we reduce k by 1 to make it 0-indexed

    while (k > 0) {
        let steps = countSteps(curr, n);
        if (steps <= k) {
            // Move to the next sibling
            k -= steps;
            curr += 1;
        } else {
            // Move to the first child
            k -= 1; // Reduce k because we are going one level deeper
            curr *= 10;
        }
    }

    return curr;
};
