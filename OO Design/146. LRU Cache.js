/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 ); //2 is the capacity

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/

//BETTER: use the fact that Map keys are ordered in the order you created them (so delete and recreate for most recent used order)
// Make class extend map to override methods
class LRUCache extends Map {
    
    contructor(capacity) {
        super();
        this.capacity = capacity;
    }

    get(key) {
        if(!this.has(key)) { 
            return -1;
        } else {
            let val = super.get(key);  //ATTENTION: super.get() we use the native Map method here!
            this.delete(key);
            this.set(key, val);
            return val;
        }
    }
    
    put(key, value) {
        if(!this.has(key)) {
            if(this.size >= this.capacity) {
                //delete the first key in the map (it's the oldest)
                this.delete(this.keys().next().value);
            }  
            this.set(key, value);
        } else {
            this.delete(key);   //delete first to set it later so that order of recent is preserved
            this.set(key, value);  
        } 
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.used = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    //if doesn't have the key
    if(!this.map.has(key)) { 
        return -1;
    } else {
        let idx = this.used.indexOf(key);
        this.used.splice(idx,1);
        this.used.push(key);
        return this.map.get(key);
    }
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.map.has(key)) {
        if(this.map.size >= this.capacity) {
            var leastRecentUsed = this.used.shift();
            this.map.delete(leastRecentUsed);
        }  
        this.map.set(key, value);
        this.used.push(key);
    } else {
        this.map.set(key, value);   //if it already has key, we just need to update value
        let idx = this.used.indexOf(key);
        this.used.splice(idx,1);
        this.used.push(key);
    }  
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */