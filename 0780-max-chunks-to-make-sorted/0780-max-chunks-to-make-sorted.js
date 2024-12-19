function maxChunksToSorted(arr) {
    let maxSeen = 0; // Tracks the maximum value seen so far
    let chunks = 0;  // Tracks the number of chunks

    for (let i = 0; i < arr.length; i++) {
        maxSeen = Math.max(maxSeen, arr[i]); // Update the maximum value seen
        if (maxSeen === i) {
            // If the maximum value seen equals the current index, a chunk can be formed
            chunks++;
        }
    }

    return chunks;
}

// Example 1
let arr1 = [4, 3, 2, 1, 0];
console.log(maxChunksToSorted(arr1)); // Output: 1

// Example 2
let arr2 = [1, 0, 2, 3, 4];
console.log(maxChunksToSorted(arr2)); // Output: 4
