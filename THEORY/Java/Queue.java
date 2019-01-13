/****************************************************************
*****************************************************************
   							QUEUE
*****************************************************************/
/* 
	First-in-First-out (FIFO) data structure.
	It extends class Collection interface.
	Being an interface the queue needs a concrete class for the declaration and the most common classes are the PriorityQueue and LinkedList in Java.

	ADD: O(1)
	POLL: O(1)

*/

Queue<T> queue = new LinkedList<T>();

.offer(E elem)	//inserts elem into queue if it is possible to do so immediately without violating capacity restrictions
.poll()			//returns and REMOVE head of queue or NULL if queue empty
.peek()			//returns but does NOT remove head of queue or returns null if queue empty
.size()

//Throw Exceptions if queue empty: NoSuchElementException
.add(E elem)
.remove()		//returns and removes head of queue
.element()		//returns but does NOT remove head of queue


//EXAMPLES
Queue<Integer> q = new LinkedList<Integer>();
q.add(5);
int head = q.peek();
int removedHead = q.remove();


/*

PRIORITY QUEUE
	Queue is FIFO but sometimes the elements of the queue are needed to be processed according to the priority, that’s when the PriorityQueue comes into play. 
	The head of this queue is the least element with respect to the specified ordering.
	

	ATTENTION: LinkedList preserves the insertion order, PriorityQueue does not.
			   PriorityQueue will sort based on natural order (alphabetical, increasing int, ...). We can use a Commparator to define a specific order.

			   Syntax: PriorityQueue(int initialCapacity, Comparator<? super E> comparator)
								Creates a PriorityQueue with the specified initial capacity that orders its elements according to the specified comparator.

	NB: PriorityQueue(int initialCapacity): Creates a PriorityQueue with the specified initial capacity that orders its elements according to their natural ordering.

*/
PriorityQueue<Integer> q = new PriorityQueue<Integer>();
q.add("C"); 
q.add("C++"); 
q.add("Java"); 
q.add("Python"); 

Iterator itr = q.iterator();
while(itr.hasNext()) {
	System.out.println(itr.next());
}

Object[] arr = q.toArray();
for(int i=0; i<arr.length; i++) {
	System.out.println(arr[i].toString());
}