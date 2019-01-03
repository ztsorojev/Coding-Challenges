/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p = headA;
    let q = headB;
    if(!p || !q) return null;
    if(p == q) return p;
    while(p && q && p!=q) {
        p = p.next;
        q = q.next;
        if(p == q) return p;
        if(!p) p = headB;
        if(!q) q = headA;
    }
    return p;
};

