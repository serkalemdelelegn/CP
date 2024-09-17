/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // If the input array is empty, return an empty string.

    // Start by assuming the prefix is the first string in the array
    let prefix = strs[0];

    // Loop through the rest of the strings in the array
    for (let i = 1; i < strs.length; i++) {
        // Reduce the prefix size if the current string doesn't start with it
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1); // Shorten the prefix by one character

            // If the prefix becomes empty, return an empty string
            if (prefix === "") return "";
        }
    }

    // Return the longest common prefix
    return prefix;
};
