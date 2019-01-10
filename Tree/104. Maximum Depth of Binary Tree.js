/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//SMARTER: Recursion (that's essentially BFS but modified to choose path that goes deepest)
//Check this for animation diagram: https://leetcode.com/problems/maximum-depth-of-binary-tree/solution/
var maxDepth = function(root) {
    if(!root) return 0;
    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    
};


var maxDepth = function(root) {
    if(!root) return 0;
    
    let queue = [];
    queue.push(root);
    
    let count = 0;
    
    while(queue.length !== 0) {
        count++;
        
        //For current level, add all nodes (in the level) to the queue in right order
        let n = queue.length;
        for(let i = 0; i<n; i++) {
            let node = queue.shift();
                
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

    }
    
    return count;
    
};

/*

Because we don't know which path will go the deepest, we will go level by level: BFS

ALGO: BFS on a Binary Tree

*/