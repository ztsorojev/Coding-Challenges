/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

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

//ATTENTION: 
//      Do this exercise AGAIN! --> interviewer expects to implement everything and not reuse structures like LinkedHashMap

//Idea: use a HashMap for quick lookup and implement a Doubly-Linked List for quick removal of nodes

class LRUCache {
    
    int capacity;
    Map<Integer, Integer> cache;
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new LinkedHashMap<Integer, Integer>();
    }
    
    public int get(int key) {
        if(!cache.containsKey(key)) {
            return -1;
        } else {
            int val = cache.get(key);
            cache.remove(key);
            cache.put(key, val);
            return val;
        } 
    }
    
    public void put(int key, int value) {
        if(!cache.containsKey(key)) {
            if(cache.size() >= capacity) {
                int leastRecentKey = cache.keySet().iterator().next();
                cache.remove(leastRecentKey);
            }
            cache.put(key, value);
        } else {
            cache.remove(key);
            cache.put(key, value);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */