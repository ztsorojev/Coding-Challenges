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

   SMARTER:
    1. Loop while both list are != null. After loop, we will just assign rest of non-null list to curr.next
    2. At each iteration, check which list has min node.
    3. Assign curr.next to this list. Move to next node in this list.
    4. Move to next node in curr.
    5. When loop is over, assign rest of non-null list to curr.next
    6. Return result.next

 */
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(-1); //the first node is not important, we will return result.next
    let curr = result;
    
    while(l1 !== null && l2 !== null) {
                
        if(l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 || l2; //we take the one not null for rest of list!
    
    return result.next;
};



/*********************************************************************/

var mergeTwoLists = function(l1, l2) {
    if(l1==null) return l2;
    if(l2==null) return l1;
    let result = new ListNode(0);
    let curr = result;
    
    while(l1 !== null || l2 !== null) {
        let l1Val = (l1 === null) ? Number.MAX_SAFE_INTEGER : l1.val;
        let l2Val = (l2 === null) ? Number.MAX_SAFE_INTEGER : l2.val;
        
        curr.val = (l1Val < l2Val) ? l1Val : l2Val;
        
        if(l1Val < l2Val) {
           l1 = (l1 !== null) ? l1.next : null;
        } else if(l1Val === l2Val) {
            curr.next = new ListNode(l1Val);
            curr = curr.next;
            l1 = (l1 !== null) ? l1.next : null;
            l2 = (l2 !== null) ? l2.next : null;
        } else {
           l2 = (l2 !== null) ? l2.next : null;
        }
        
        if(l1 !== null || l2 !== null) {
            curr.next = new ListNode(0);
            curr = curr.next;
        }        
    }
    
    return result;
};