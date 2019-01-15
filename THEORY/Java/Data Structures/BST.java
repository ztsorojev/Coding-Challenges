/****************************************************************
*****************************************************************
   						BINARY SEARCH TREE

Each node’s element must be greater than every element in its left 
subtree and less than every element in its right subtree.   						
*****************************************************************/

/* Definition for a Binary Tree node */
class Node {
	int val;
	Node left, right;

	//Constructor
	public Node(int x) {
		val = x;
	}

	//Inserts value into BST
	public void insert(int value) {
		if(value <= val) {
			if(left == null) {
				left = new Node(value);
			} else {
				left.insert(value);
			}
		} else {
			if(right == null) {
				right = new Node(value);
			} else {
				right.insert(value);
			}
		}
	}

	//Checks if BST contains value
	public boolean contains(int value) {
		if(value == val) {
			return true;
		} else if(value < val) {
			if(left == null) {
				return false;
			} else {
				left.contains(value);
			}
		} else {
			if(right == null) {
				return false;
			} else {
				right.contains(value);
			}
		}
	}

	//In-order traversal
	public void printInOrder() {
		if(left != null) {
			left.printInOrder();
		}
		System.out.println(val);
		if(right != null) {
			right.printInOrder();
		}
	}



}