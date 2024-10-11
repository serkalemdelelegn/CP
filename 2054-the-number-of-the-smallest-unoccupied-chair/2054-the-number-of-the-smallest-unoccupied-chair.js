var smallestChair = function(times, targetFriend) {
    const n = times.length;
    
    // Step 1: Create a list of events, where each event is either an arrival or departure.
    const events = [];
    for (let i = 0; i < n; i++) {
        events.push([times[i][0], 'arrive', i]);  // [time, type, friend]
        events.push([times[i][1], 'leave', i]);   // [time, type, friend]
    }

    // Step 2: Sort the events by time. If two events have the same time, process leaves before arrivals.
    events.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] === 'leave' ? -1 : 1;  // prioritize leaving over arriving at the same time
    });

    // Step 3: Initialize min-heap for available chairs and for tracking friend chair assignments
    const availableChairs = new MinPriorityQueue({ priority: (x) => x }); // Min-heap for available chairs
    for (let i = 0; i < n; i++) availableChairs.enqueue(i);  // Initially all chairs are available

    const friendChairMap = new Array(n).fill(null);  // Which chair each friend is sitting on

    // Step 4: Process each event
    for (const event of events) {
        const [time, type, friend] = event;

        if (type === 'arrive') {
            // Assign the smallest available chair
            const chair = availableChairs.dequeue().element;
            friendChairMap[friend] = chair;

            // If the friend is the target friend, return the chair number
            if (friend === targetFriend) return chair;
        } else if (type === 'leave') {
            // When a friend leaves, their chair becomes available
            availableChairs.enqueue(friendChairMap[friend]);
        }
    }
};
