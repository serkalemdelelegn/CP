class Node {
    constructor(count) {
        this.count = count;
        this.keys = new Set();
        this.prev = null;
        this.next = null;
    }
}

var AllOne = function() {
    this.head = new Node(0); // Dummy head node for easier list operations
    this.tail = new Node(0); // Dummy tail node
    this.head.next = this.tail;
    this.tail.prev = this.head;
    
    this.key_count_map = new Map(); // Tracks counts for each key
    this.count_node_map = new Map(); // Tracks the node corresponding to each count
};

// Adds a node after the given node
AllOne.prototype.addNodeAfter = function(newNode, prevNode) {
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
};

// Removes a node from the linked list
AllOne.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
};

// Increments the count of the string key by 1
AllOne.prototype.inc = function(key) {
    let count = this.key_count_map.get(key) || 0;
    this.key_count_map.set(key, count + 1);
    
    let currentNode = this.count_node_map.get(count);
    let newNode;
    
    // Check if we already have a node for count + 1
    if (!this.count_node_map.has(count + 1)) {
        newNode = new Node(count + 1);
        this.count_node_map.set(count + 1, newNode);
        if (currentNode) {
            this.addNodeAfter(newNode, currentNode);
        } else {
            this.addNodeAfter(newNode, this.head); // For the case where currentNode is null (first time insert)
        }
    } else {
        newNode = this.count_node_map.get(count + 1);
    }
    
    // Move the key to the new node
    if (currentNode) currentNode.keys.delete(key);
    newNode.keys.add(key);
    
    // Remove the old node if it's empty
    if (currentNode && currentNode.keys.size === 0) {
        this.removeNode(currentNode);
        this.count_node_map.delete(count);
    }
};

// Decrements the count of the string key by 1
AllOne.prototype.dec = function(key) {
    let count = this.key_count_map.get(key);
    if (count === 1) {
        // Remove key completely
        this.key_count_map.delete(key);
    } else {
        // Decrease key's count
        this.key_count_map.set(key, count - 1);
    }
    
    let currentNode = this.count_node_map.get(count);
    let newNode;
    
    // Check if we need a new node for count - 1
    if (count > 1) {
        if (!this.count_node_map.has(count - 1)) {
            newNode = new Node(count - 1);
            this.count_node_map.set(count - 1, newNode);
            this.addNodeAfter(newNode, currentNode.prev);
        } else {
            newNode = this.count_node_map.get(count - 1);
        }
        newNode.keys.add(key);
    }
    
    // Remove the key from the current node
    currentNode.keys.delete(key);
    
    // Remove the old node if it's empty
    if (currentNode.keys.size === 0) {
        this.removeNode(currentNode);
        this.count_node_map.delete(count);
    }
};

// Returns one of the keys with the maximal count
AllOne.prototype.getMaxKey = function() {
    if (this.tail.prev === this.head) return "";
    let maxNode = this.tail.prev;
    return maxNode.keys.values().next().value; // Return any key from the max count node
};

// Returns one of the keys with the minimum count
AllOne.prototype.getMinKey = function() {
    if (this.head.next === this.tail) return "";
    let minNode = this.head.next;
    return minNode.keys.values().next().value; // Return any key from the min count node
};
