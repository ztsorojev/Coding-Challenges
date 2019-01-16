/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

----------
Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

----------
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
// Use recursion
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root == null || root == p || root == q) return root;
        
        //We will go check in each branch if it contains the nodes
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        
        //If nodes are on both left and right side
        if(left != null && right != null) return root;
        //Else return the node that isn't null (the one that is null means there was no p or q on that side)
        else {
            return (left != null)? left : right;
        }
    }
}

/***********************************************************************************************/
//NB: if we have a Binary Search Tree (BST), it's easier
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode commonAncestor = root;
        while(commonAncestor != null) {
            if(p.val < commonAncestor.val && q.val < commonAncestor.val) {
                commonAncestor = commonAncestor.left;
            } else if(p.val > commonAncestor.val && q.val > commonAncestor.val) {
                commonAncestor = commonAncestor.right;
            } else {
                return commonAncestor;
            }
        }
        return commonAncestor;
    }
}