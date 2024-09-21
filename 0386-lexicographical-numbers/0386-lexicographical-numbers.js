/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let result = [];
    let curr = 1;

    for (let i = 0; i < n; i++) {
        result.push(curr);
        if (curr * 10 <= n) {
            // If appending a zero is valid, do so
            curr *= 10;
        } else {
            // Otherwise, increment the current number
            if (curr >= n) curr = Math.floor(curr / 10);
            curr++;
            // Remove trailing zeros
            while (curr % 10 === 0) curr = Math.floor(curr / 10);
        }
    }

    return result;
};
