var dividePlayers = function(skill) {
    // Step 1: Sort the skill array
    skill.sort((a, b) => a - b);
    
    let n = skill.length;
    let totalSkill = skill[0] + skill[n - 1]; // Target total skill for each pair
    let chemistrySum = 0;
    
    // Step 2: Check all pairs
    for (let i = 0; i < n / 2; i++) {
        let teamSkill = skill[i] + skill[n - 1 - i];
        
        // If the total skill for the current pair is not the same as the first one, return -1
        if (teamSkill !== totalSkill) {
            return -1;
        }
        
        // Calculate chemistry for the current pair
        chemistrySum += skill[i] * skill[n - 1 - i];
    }
    
    // Step 3: Return the total chemistry sum
    return chemistrySum;
};
