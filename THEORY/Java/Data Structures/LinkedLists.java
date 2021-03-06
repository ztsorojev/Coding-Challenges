/****************************************************************
*****************************************************************
   						LINKED LISTS
*****************************************************************/
/* 
INSERT: O(1)
SEARCH: O(n)

/*
 * Definition for SINGLY-linked list.
 */
public class Node {
    int val;
    Node next;
    public Node(int x) { 
    	this.val = x;
    }
}

public class LinkedList {
	Node head;

	//Add element at the end of list
	public void append(int data) {
		if(head == null) {
			head = new Node(data);
			return;
		}
    	Node curent = head;
    	while(current.next != null) {
    		current = current.next;
    	}
    	current.next = new Node(data);
    }

    //Add element at the start of list
    public void prepend(int data) {
    	Node newHead = new Node(data);
    	newHead.next = head;
    	head = newHead;
    }

    public void deleteWithValue(int data) {
    	if(head == null) return;
    	if(head.val == data) head = head.next;

    	Node current = head;
    	while(current.next != null) {
    		if(current.next.val == data) {
    			current.next = current.next.next;
    			return;
    		}
    		current = current.next;
    	}
    }

}

//Example
LinkedList list = new LinkedList();
list.append(5);
list.prepend(2);



/************************************************
/************************************************
 * DOUBLY-linked list: native DS in Java
 */
LinkedList<T> list = new LinkedList<T>();

//Example:
LinkedList<String> list = new LinkedList<String>();

//GET & SET ------
String el = list.get(2);
				 getList()
				 getLast()
				 indexOf(Object o)
list.set(2, "Y");
String head = list.poll();	// retrive and remove head of list (1st element)

pop​(); 		// pops an element from the stack represented by this list.
push​(E e); 	// pushes an element onto the stack represented by this list

int size = list.size();

toArray​()	// returns an array containing all of the elements in this list in proper sequence (from first to last element).
Object[] listArr = list.toArray​();

//ADD -----------
list.add("A");	
list.addLast("C");	//Put "C" at end of list
list.addFirst("D");	//Put "B" at start
list.add(1, "B");	//Put "B" at position 1 and shift the rest
//Prints: [D, B, A, C]

//REMOVE ---------
list.remove("B");
list.remove(2);
list.removeFirst();
list.removeLast();

//FIND -----------
String tst = "E";
boolean isInList = list.contains(tst);


list.clear();	// removes all of the elements from this list


/************************
 * IF WE WANT TO BUILD A DLL OURSELVES:
 * Class for Doubly Linked List
 */
public class DLL { 
    Node head; // head of list 
  
  	//We define the class as private so that we can instantiate it in DLL class
	private class Node {
	    int val;
	    Node prev;
	    Node next;

	    // Constructor: next and prev are by default initialized as null 
	    Node(int x) { 
	    	val = x;
	    }
	}
} 


/************************
 * CIRCULAR LINKED LIST
 * is a linked list where all nodes are connected to form a circle. 
 * There is no NULL at the end. A circular linked list can be a singly circular linked list or doubly circular linked list.
 */