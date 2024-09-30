var CustomStack = function(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
    this.inc = new Array(maxSize).fill(0); // To track increment for each element
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize) {
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.stack.length === 0) return -1;
    
    let index = this.stack.length - 1;
    let res = this.stack.pop() + this.inc[index]; // Apply increment on pop
    
    if (index > 0) {
        this.inc[index - 1] += this.inc[index]; // Pass the increment downwards
    }
    
    this.inc[index] = 0; // Reset the increment for this position
    return res;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let limit = Math.min(k, this.stack.length) - 1; // Only increment up to the current stack size
    if (limit >= 0) {
        this.inc[limit] += val; // Accumulate increment for the bottom `k` elements
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
