/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @return {boolean}
 
   EVEN SMARTER:
    2. Traverse linked list.
    3. Mark each node's value so we know it has been traverse. Put it to null.
    4. If at some point, we see node whose value is null, it means we already visited it -> we have a cycle!
    
    Time: O(n) and Space: O(1)
    
 */
var hasCycle = function(head) {
    while(head) {
        if(head.val === null) {
            return true;
        } 
        head.val = null; //marks that we visited this node
        head = head.next;
    }
    return false;
};


/**********************************************/

/**
 * @param {ListNode} head
 * @return {boolean}

    1. Create map that stores visited nodes as key. We use map and not object, because map keys can be of any type.
    2. Traverse linked list.
    3. For each node, check if it was already visited before in the map.
    4. If it was, we have a cicle. Return true.
    5. Else and if reached end of list, return false.
 */

// Time: O(n) and Space: O(n)
var hasCycle = function(head) {
    let map = new Map();
    
    while(head !== null) {
        if(map.has(head)) {
            return true;
        } else {
            map.set(head, 1);
        }
        head = head.next;
    }
    return false;
};

