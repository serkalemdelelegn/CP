/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // Convert numbers to strings
    let numsStr = nums.map(num => num.toString());

    // Sort the numbers based on the custom comparator
    numsStr.sort((a, b) => (b + a).localeCompare(a + b));

    // Join the sorted array into a single string
    let result = numsStr.join('');

    // Handle the case where the result starts with '0'
    return result[0] === '0' ? '0' : result;
};
