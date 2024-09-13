/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    // Step 1: Build the prefix XOR array
    const n = arr.length;
    const prefixXor = new Array(n + 1).fill(0); // Extra element to handle left boundary

    for (let i = 0; i < n; i++) {
        prefixXor[i + 1] = prefixXor[i] ^ arr[i];
    }

    // Step 2: Answer each query using the prefix XOR array
    const result = [];
    for (const [left, right] of queries) {
        result.push(prefixXor[right + 1] ^ prefixXor[left]);
    }

    return result;
};
