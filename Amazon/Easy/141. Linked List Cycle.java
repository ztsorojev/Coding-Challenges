//Given a linked list, determine if it has a cycle in it.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
//BETTER: use HashSet --> don't need HashMap because we don't need to store pairs
public class Solution {
    public boolean hasCycle(ListNode head) {
        Set<ListNode> seenNodes = new HashSet<>();
        ListNode curr = head;
        while(curr != null) {
            if(!seenNodes.contains(curr)) {
                seenNodes.add(curr);
            } else {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
}




/********************************************************************/
public class Solution {
    public boolean hasCycle(ListNode head) {
        Map<ListNode, Integer> map = new HashMap<>();
        ListNode curr = head;
        int i=0;
        while(curr != null) {
            if(!map.containsKey(curr)) {
                map.put(curr, i);
            } else {
                return true;
            }
            curr = curr.next;
            i++;
        }
        return false;
    }
}