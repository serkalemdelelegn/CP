var arrayRankTransform = function(arr) {
    if (arr.length === 0) return [];
    
    // Step 1: Sort the array with unique elements
    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);
    
    // Step 2: Create a rank mapping
    const rankMap = new Map();
    for (let i = 0; i < sortedUnique.length; i++) {
        rankMap.set(sortedUnique[i], i + 1);  // i+1 because ranks start from 1
    }
    
    // Step 3: Replace each element in the original array with its rank
    return arr.map(num => rankMap.get(num));
};
