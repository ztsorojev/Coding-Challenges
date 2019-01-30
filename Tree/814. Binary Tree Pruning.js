/*
SOURCE: https://leetcode.com/problems/binary-tree-pruning/

We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]

Example 2:
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]

Example 3:
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    
    let left = containsOne(root.left);
    let right = containsOne(root.right); 
    
    if(!left) root.left = null;
    else 
        root.left = pruneTree(root.left);
    
    if(!right) root.right = null;
    else 
        root.right = pruneTree(root.right);  
    
    return root;
};

var containsOne = function(root) {
    if(root == null) return false;
    
    if(root.val == 1) return true;
    else {
        let left = containsOne(root.left);
        let right = containsOne(root.right);
        return (left || right);
    }
}



/*******************************/
// SHORTER METHOD
// The idea is to start at the bottom of the tree, find nodes whose value is 0 and that have no children. Remove them. 
// Move up and look for other nodes with val=0 and no children in the resulting tree.
var pruneTree = function(root) {
    if (root) {
        //If root is node with no children and value 0, we remove it
        if(!root.left && !root.right && root.val === 0){
            return null;
        } else{
            //we go to each subtree and try to find node whose value is 0 and that has no children
            root.left = pruneTree(root.left);
            root.right = pruneTree(root.right);
            if (!root.left && !root.right && root.val === 0){
                return null;
            }
        }
    }
    return root
};
    