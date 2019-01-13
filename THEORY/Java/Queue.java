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


/**********************************

PRIORITY QUEUE
--------------
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




/**********************************

DEQUE: double-ended queue
--------------
	The java.util.Deque interface is a subtype of the java.util.Queue interface.
	A queue is designed to have elements inserted at the end of the queue, and elements removed from the beginning of the queue. 
	Where as DEQUEUE represents a queue where you can insert and remove elements from both ends of the queue.
	It can be used as a queue (FIFO) or as a stack (LIFO). 

		--> These are faster than Stack and LinkedList.

*/

Deque<T> deque = new LinkedList<T>();

/*
 * Contains all functions from Queue and LinkedList
 *		--> Use First/Last versions to access head or tail!
 */
.add(E elem)			// Adds element to tail
	.addFirst(E elem)
	.addLast(E elem)

	.offer(E elem)		// Adds an element to the tail and returns a boolean to explain if the insertion was successful.
	.offerFirst(E elem)
	.offerLast(E elem)

.iterator()				// Returns iterator for this deque
.descendingIterator()	// Reverse iterator

.push(E elem)			// Adds element to the HEAD
.pop(E elem)			// Removes element from head and RETURNS it

.remove()
	.removeFirst()
	.removeLast()

.poll()					// Returns and removes HEAD of queue, or null if empty
	.pollFirst()
	.pollLast()

.peek()					// Returns (but does NOT remove) HEAD of queue, or null if empty
	.peekFirst()
	.peekLast()



//EXAMPLES:
Deque<String> deque = new LinkedList<String>();

deque.add("Tail");
deque.addFirst("Head");
deque.add("New Tail");
dequeu.push("New Head");