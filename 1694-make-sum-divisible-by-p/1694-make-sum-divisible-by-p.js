var minSubarray = function(nums, p) {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    const targetRemainder = totalSum % p;

    if (targetRemainder === 0) return 0; // Already divisible by p

    const prefix_mod_map = new Map(); // To store prefix sum modulo p and index
    prefix_mod_map.set(0, -1); // Initial value to handle cases where the subarray starts from index 0
    let prefixSum = 0;
    let minLen = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefixSum = (prefixSum + nums[i]) % p;
        let requiredRemainder = (prefixSum - targetRemainder + p) % p;

        if (prefix_mod_map.has(requiredRemainder)) {
            minLen = Math.min(minLen, i - prefix_mod_map.get(requiredRemainder));
        }

        // Store the current prefix sum mod in the map
        prefix_mod_map.set(prefixSum, i);
    }

    return minLen === nums.length ? -1 : minLen;
};
