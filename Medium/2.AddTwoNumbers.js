/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //BIG IDEA: create additional variables to pass by ref and go next with them
var addTwoNumbers = function(l1, l2) {
    let output = new ListNode(0); 
    let curr = output; //pass by reference
    let carry = 0; let p = l1; let q = l2;
    let pVal, qVal, sum;
    
    while(p!==null || q!==null) {
        pVal = (p!=null) ? p.val : 0;
        qVal = (q!=null) ? q.val : 0;
        sum = pVal + qVal + carry;
        
        if(sum >= 10) {
            carry = 1;
            curr.val = sum-10;
        } else {
            carry = 0;
            curr.val = sum;
        }
                
        p = (p != null) ? p.next : null;
        q = (q != null) ? q.next : null;
        
        if(p!=null || q!=null) {
           curr.next = new ListNode(0);
           curr = curr.next;
        }
        
    }

    if(carry > 0) {
        curr.next = new ListNode(carry);
    }

    
    return output;
};

