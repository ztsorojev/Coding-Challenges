/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

Explanation: 342 + 465 = 807.


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

//SIMPLER: avoir reusing same code!
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode p = l1, q=l2;
        ListNode curr = dummyHead;

        int carry = 0;

        while(p != null || q != null) {
            int x = (p != null)? p.val : 0;
            int y = (q != null)? q.val : 0;

            int sum = x + y + carry;
            carry = sum / 10;

            curr.next = new ListNode(sum % 10);
            curr = curr.next;

            if(p!=null) p = p.next;
            if(q!=null) q = q.next;
        }

        if(carry > 0) {
            curr.next = new ListNode(carry);
        }

        return dummyHead.next;
    }
}



/************************************************************************/
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode p1 = l1, p2 = l2;
        
        int sum = p1.val + p2.val;
        int carry = (sum >= 10)? 1 : 0;
        
        ListNode output = new ListNode(sum % 10);
        ListNode curr = output;
        
        p1 = p1.next; p2 = p2.next;
        
        while(p1 != null && p2 != null) {
            sum = p1.val + p2.val + carry;
            carry = (sum >= 10)? 1 : 0;
            
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            
            p1 = p1.next;
            p2 = p2.next;
        }
        
        while(p1 != null) {
            sum = p1.val + carry;
            carry = (sum >= 10)? 1 : 0;
            
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            p1 = p1.next;
        }
        
        while(p2 != null) {
            sum = p2.val + carry;
            carry = (sum >= 10)? 1 : 0;
            
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            p2 = p2.next;
        }
        
        if(carry == 1) {
            curr.next = new ListNode(carry);
        }
        
        return output;
    }
}