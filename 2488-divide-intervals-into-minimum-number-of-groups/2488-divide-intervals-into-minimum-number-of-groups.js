var minGroups = function(intervals) {
    let events = [];
    
    // Step 1: Create events for start and end of intervals
    for (const [start, end] of intervals) {
        events.push([start, 1]);       // Event: start of interval
        events.push([end + 1, -1]);    // Event: end of interval
    }
    
    // Step 2: Sort events by time, with tie-breaking (end events first)
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    let maxGroups = 0, activeIntervals = 0;
    
    // Step 3: Traverse through the events, count active intervals
    for (const [time, eventType] of events) {
        activeIntervals += eventType;
        maxGroups = Math.max(maxGroups, activeIntervals);
    }
    
    return maxGroups;
};
