/*
Given a singly linked list, determine if it is a palindrome.

----------
Example 1:

Input: 1->2
Output: false

----------
Example 2:

Input: 1->2->2->1
Output: true

Follow up:
Could you do it in O(n) time and O(1) space?

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
 */
// Time: O(n) and Space: O(1)
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true;
    
    let end = head;
    end.prev = null;
    
    let start = head;
    let length = 1;
    
    //Transform the list into a doubly-linked list
    while(end.next !== null) {
        end.next.prev = end;
        length++;
        end = end.next;
    }
    
    for(let i=0; i<length/2; i++) {
        if(start.val !== end.val) return false;
        start = start.next;
        end = end.prev;
    }
    return true;
};


/*********************************************/

//Time: O(n) and Space: O(n)
var isPalindrome = function(head) {
    let values = [];  //we will stores all the values in the list in an array and check if array is palindrome!
    while(head !== null) {
        values.push(head.val);
        head = head.next;
    }
    for(let i=0; i<values.length/2; i++) {
        if(values[i] !== values[values.length-1-i]) return false;
    }
    return true;
};