var MyCircularDeque = function(k) {
    this.capacity = k; // Maximum size of deque
    this.size = 0;     // Current size of deque
    this.front = 0;    // Points to the front element
    this.rear = 0;     // Points to the next position to insert at the rear
    this.deque = new Array(k);  // Array to store deque elements
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) return false;  // Cannot insert if full
    this.front = (this.front - 1 + this.capacity) % this.capacity; // Circularly move front back
    this.deque[this.front] = value;  // Insert value at the front
    this.size++;  // Increment the size
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) return false;  // Cannot insert if full
    this.deque[this.rear] = value;   // Insert value at the rear
    this.rear = (this.rear + 1) % this.capacity;  // Circularly move rear forward
    this.size++;  // Increment the size
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) return false;  // Cannot delete if empty
    this.front = (this.front + 1) % this.capacity;  // Circularly move front forward
    this.size--;  // Decrement the size
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false;  // Cannot delete if empty
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;  // Circularly move rear back
    this.size--;  // Decrement the size
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) return -1;  // Return -1 if empty
    return this.deque[this.front];  // Return the front element
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) return -1;  // Return -1 if empty
    return this.deque[(this.rear - 1 + this.capacity) % this.capacity];  // Return the rear element
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0;  // Deque is empty if size is 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size === this.capacity;  // Deque is full if size equals capacity
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
