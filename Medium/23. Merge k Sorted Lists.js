/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}

    1. While lists is not empty (full of null elements)
        2. Find list with min current element
        3. Assign curr.next to this list
        4. Move forward with this list -> list = list.next;
        5. Move forward with curr = curr.next;

    5. After loop, assign curr.next is the eventual rest we have in list (longest list)

    Time: O(m*n^2)
    Space: O(1)

 */
var mergeKLists = function(lists) {
    let res = new ListNode(-1);
    let curr = res;
    let nberNulls = 0;
    lists.forEach((x) => {
         if(x === null || x.length <= 0) {
             nberNulls++;
         }
    });
    
    while(nberNulls < lists.length-1)  { //will stop when only one element in list is different from null
        let idxMinList = findMinList(lists);
        curr.next = lists[idxMinList];
        lists[idxMinList] =  lists[idxMinList].next;
        if(lists[idxMinList] === null) nberNulls++;
        curr = curr.next;
    }
    curr.next = nonNullList(lists);
    return res.next;
};

//Returns index of list inside lists that has min 1st element
var findMinList = function(lists) {
    let min = Number.MAX_SAFE_INTEGER;
    let idx = -1;
    for(let i=0; i<lists.length; i++) {
        if(lists[i] !== null && lists[i].val < min) {
            min = lists[i].val;
            idx = i;
        }
    }
    return idx;
}

//Returns list inside lists that is not null
//If doesn't exist, returns null
var nonNullList = function(lists) {
    for(let x of lists) {
        if(x !== null)
            return x;
    }
    return null;
}


