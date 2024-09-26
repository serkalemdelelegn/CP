var MyCalendar = function() {
    this.bookings = [];  // To store all the booked intervals
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    // Iterate through all the existing bookings
    for (const [s, e] of this.bookings) {
        // Check for overlap between [start, end) and [s, e)
        if (start < e && s < end) {
            return false;  // Return false if overlap is found
        }
    }
    
    // If no overlap, add the new booking and return true
    this.bookings.push([start, end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
