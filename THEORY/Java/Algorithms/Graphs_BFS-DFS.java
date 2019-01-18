// Definition for undirected graph.
class GraphNode {
	int label;
	List<GraphNode> neighbors;

	GraphNode(int x) {
		label = x;
		neighbors = new ArrayList<GraphNode>();
	}

	void BFS(int s) {
		GraphNode source = new GraphNode(s);
		Queue<GraphNode> queue = new LinkedList<GraphNode>();
		queue.add(source);

		Set<GraphNode> visited = new HashSet<GraphNode>();
		visited.add(source);

		while(!queue.isEmpty()) {
			GraphNode node = queue.poll();
			System.out.print(node.label + " ");

			for(GraphNode neighbor : node.neighbors) {
				if(!visited.contains(neighbor)) {
					visited.add(neighbor);
					queue.add(neighbor);
				}
			}
		}
	}

	void DFS(int s) {
		GraphNode source = new GraphNode(s);
		
		Stack<GraphNode> stack = new Stack<GraphNode>();
		stack.push(source);

		Set<GraphNode> visited = new HashSet<GraphNode>();
		visited.add(source);

		while(!stack.isEmpty()) {
			GraphNode node = stack.pop();
			System.out.print(node.label  + " ");

			for(GraphNode neighbor : node.neighbors) {
				if(!visited.contains(neighbor)) {
					visited.add(neighbor);
					stack.push(neighbor);
				}
			}
		}

	}
}



/***********************************************/
// DIFFERENT WAY: using adjacent matrix
class Graph {
	private int V;	// number of vertices
	private LinkedList<Integer> adj[];
	
	// Constructor
	Graph(int v) {
		V = v;
		adj = new LinkedList[v];
		for(int i=0; i<v; i++) {
			adj[i] = new LinkedList();
		}
	}
	
	// Function to add an edge into the graph
	void addEdge(int v, int w) {
		adj[v].add(w);
	}
	
	// Print BFS traversal from a given source
	void BFS(int s) {
		// Mark all vertices as not visited (false by default)
		boolean visited[] = new Boolean[V];
		
		// Create queue for BFS
		LinkedList<Integer> queue = new LinkedList<Integer>();
		
		// Mark current noted as visited and enqueue it
		visited[s] = true;
		queue.add(s);
		
		while(queue.size() != 0) {
			
			// Dequeue vertex from queue and print it
			s = queue.poll();
			System.out.print(s + " ");
			
			// Get all adjacent vertices of dequeued vertex size
			// If node hasn't been visited yet, mark it as visited and enqueue it
			Iterator<Integer> iter = adj[s].listIterator();
			while(iter.hasNext()) {
				int node = iter.next();
				if(!visited[node]) {
					visited[node] = true;
					queue.add(node);
				}
			}	
		}	
	}
	
	// Print DFS traversal from given source
	void DFS(int s) {
		boolean visited = new Boolean[V];
		
		Stack<Integer> stack = new Stack<Integer>();
		
		visited[s] = true;
		stack.push(s);
		
		while(!stack.empty()) {
			s = stack.pop();
			System.out.print(s + " ");
			
			Iterator<Integer> iter = adj[s].listIterator();
			while(iter.hasNext()) {
				int node = iter.next();
				if(!visited[node]) {
					visited[node] = true;
					stack.push(node);
				}				
			}
		}
	}
	
	
}