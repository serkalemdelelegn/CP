var MyCalendarTwo = function() {
    this.singleBookings = [];  // Stores intervals with single bookings
    this.doubleBookings = [];  // Stores intervals with double bookings
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    // Check if adding this event would cause a triple booking
    for (const [ds, de] of this.doubleBookings) {
        if (start < de && ds < end) {
            return false;  // Triple booking found, return false
        }
    }

    // If no triple booking is found, check for overlaps with single bookings
    for (const [ss, se] of this.singleBookings) {
        if (start < se && ss < end) {
            // There is an overlap; add the overlapping part to double bookings
            this.doubleBookings.push([Math.max(start, ss), Math.min(end, se)]);
        }
    }

    // Add the new event to single bookings
    this.singleBookings.push([start, end]);
    
    return true;  // Booking successful, no triple booking
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
