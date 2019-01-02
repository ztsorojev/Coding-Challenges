/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL


Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//ITERATIVE APPROACH --------------------------------
//Even better: only loop once and at each element, change the next pointer to be the current element and keep copy of next
//so you can still move forward but we are changing order ate very step
//Time: O(n) and Space: O(1)
var reverseList = function(head) {
    if(head===null || head===undefined) return null;
    let curr = head;
    let prev = null;
    while(curr !== null) {
        let tmpNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmpNext;
    }
    return prev;
}

//Time: O(n) and Space: O(n)
var reverseList = function(head) {
    if(head===null || head===undefined) return null;
    let curr = head;
    
    let arrList = [];
    while(curr !== null) {
        arrList.push(curr.val);
        curr = curr.next;
    }
    curr = new ListNode(arrList[arrList.length-1]);
    let reverse = curr;
    for(let i=(arrList.length-2); i>=0;--i) {
        curr.next = new ListNode(arrList[i]);
        curr = curr.next;
    }
    return reverse;
};


//RECURSIVE APPROACH --------------------------------
//Time: O(n) and Space: O(n)
var reverseList = function(head) {
    
};
