/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.


Deep copy: means we copy everything. Both lists will have all same values but point to different memory locations.

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

// Time: O(n)
// Space: O(1)
var copyRandomList = function(head) {
    
    if(head===null) return null;
    
    let copy = new RandomListNode(head.label);
    let runner1 = head;
    let runner2 = copy;
    
    while(runner1 !== null) {
        
        runner2.label = runner1.label;
        if(runner1.random !== null) {
            runner2.random = new RandomListNode('');
            runner2.random.label = runner1.random.label;
        } else {
            runner2.random = null;
        }
        
        runner1 = runner1.next;
        if(runner1 !== null) {
            runner2.next = new RandomListNode('');
            runner2 = runner2.next;
        }
          
    }
    
    return copy;
};


/*

- Create 3 new nodes where label = head.label
    --> one is copy
    --> other two are runners (temp): one for head and one for copy
    --> runners change their ref to each next node, step by step until next = null
    --> each step, runner1 (head) assigns label value to runner2 (copy)


*/