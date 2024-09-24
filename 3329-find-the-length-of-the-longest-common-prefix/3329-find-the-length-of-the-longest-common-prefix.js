/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let maxPrefixLength = 0;
    
    // Function to find the longest common prefix length between two strings
    const commonPrefixLength = (str1, str2) => {
        let i = 0;
        while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
            i++;
        }
        return i;
    };
    
    // Convert all numbers to strings
    let arr2Str = arr2.map(String);
    
    // Sort arr2Str for efficient searching
    arr2Str.sort();
    
    // For each number in arr1, find the closest matching prefixes in arr2
    for (let num1 of arr1) {
        const str1 = num1.toString();
        
        // Perform binary search to find the closest matches in arr2Str
        let low = 0, high = arr2Str.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            const prefixLength = commonPrefixLength(str1, arr2Str[mid]);
            maxPrefixLength = Math.max(maxPrefixLength, prefixLength);
            
            if (arr2Str[mid] < str1) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    
    return maxPrefixLength;
};
