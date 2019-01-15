// Definition for undirected graph.
public class Tree {

	static class Node {
		int label;
		List<Node> children;

		//NOTE: in java, we use 'this' in constructor when instance variable name is same as parameter name (to avoid confusion for the compiler)
		Node(int x) {
			this.label = x;
			this.children = new ArrayList<Node>();
		}
	}

	/*
	
	private Queue<Node> queue;	
	Tree() {
		queue = new LinkedList<Node>();
	}

	*/

	void BFS(Node root) {
		if(root == null) return;

		Queue<Node> queue = new LinkedList<Node>();
		queue.add(root);

		while(!queue.isEmpty()) {
			Node n = queue.poll();
			System.out.print(n + " ");

			for(Node child : n.children) {
				if(child != null) {
					queue.add(child);
				}
			}
		}
	}

	void DFS(Node root) {
		if(root == null) return;

		Stack<Node> stack = new Stack<Node>();
		stack.push(root);

		while(!stack.isEmpty()) {
			Node n = stack.pop();
			System.out.print(n + " ");

			for(Node child : n.children) {
				if(child != null) {
					stack.push(child);
				}
			}
		}
	}

}


//For a Binary Search Tree (BST), it's even simpler
public class BST {

	//We define the class as static so that we can instanciate it inside BST
	static class Node {
		int label;
		Node left, right;

		Node(int x) {
			this.label = x;
			this.left = null;
			this.right = null;
		}
	}

	void BFS(Node root) {
		if(root == null) return;

		Queue<Node> queue = new LinkedList<Node>();
		queue.add(root);

		while(!queue.isEmpty()) {
			Node n = queue.poll();
			System.out.print(n + " ");

			if(n.left != null) queue.add(n.left);
			if(n.right != null) queue.add(n.right);
		}
	}

}