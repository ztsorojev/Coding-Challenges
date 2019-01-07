/*
In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, 
then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?


Example 1:

Input: [1,2,1]
Output: 3
Explanation: We can collect [1,2,1].
Example 2:

Input: [0,1,2,2]
Output: 3
Explanation: We can collect [1,2,2].
If we started at the first tree, we would only collect [0, 1].
Example 3:

Input: [1,2,3,2,2]
Output: 4
Explanation: We can collect [2,3,2,2].
If we started at the first tree, we would only collect [1, 2].
Example 4:

Input: [3,3,3,1,2,1,1,2,3,3,4]
Output: 5
Explanation: We can collect [1,2,1,1,2].
If we started at the first tree or the eighth tree, we would only collect 4 fruits.
 

Note:
1 <= tree.length <= 40000
0 <= tree[i] < tree.length

/**
 * @param {number[]} tree
 * @return {number}

    We can reformulate this problem as finding the longest subarray with max 2 different elements.

    Algo: sliding window
        --> but it's a modified version
        --> hash table: key = fruit and val = number of times it appears
        --> we will add every element to hash table and when size hash is > 2, 
            it means we encountered a 3rd type of fruit. So we enter into a new subarray.
        --> To keep it efficient: we will remove elements at beginning of subarray until 
            we only have 2 types of elements in subarray.

 */
var totalFruit = function(tree) {
    let map = new Map();
    let right = 0,  left = 0, max = 0;
    while(right < tree.length) {
        map.set(tree[right], (map.get(tree[right]) || 0) + 1);
        right++;
        
        while(map.size > 2) {
            //as we move to the left in the subarray, we decrease number of times the fruit tree[left] appears
            map.set(tree[left], map.get(tree[left]) - 1);
            //when there is no more fruit tree[left], we delete it
            if(map.get(tree[left]) === 0) {
                map.delete(tree[left]);
            }
            left++;
        }
        
        max = Math.max(max, right-left);
    }
    return max;
};
