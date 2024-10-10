var minAddToMakeValid = function(s) {
    let open = 0;  // Tracks unmatched opening '(' parentheses
    let close = 0; // Tracks unmatched closing ')' parentheses

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;  // Increment for every opening parenthesis
        } else if (s[i] === ')') {
            if (open > 0) {
                open--;  // Match it with a previously unmatched '('
            } else {
                close++;  // No unmatched '(', so this ')' is unmatched
            }
        }
    }

    // The result is the sum of unmatched '(' and unmatched ')'
    return open + close;
};
