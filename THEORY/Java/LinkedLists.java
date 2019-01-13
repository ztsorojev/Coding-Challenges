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
public class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { 
    	val = x;
    }
}

//Example
ListNode list = new ListNode(2); //head of the list
ListNode second = new ListNode(8);
ListNode third = new ListNode(7);
list.next = second;
second.next = third;


/************************
 * DOUBLY-linked list
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
String[] listArr = list.toArray​();

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
 * IF WE WANT TO BUILD A DLL:
 * Class for Doubly Linked List
 */
public class DLL { 
    Node head; // head of list 
  
	class ListNode {
	    int val;
	    ListNode prev;
	    ListNode next;

	    // Constructor: next and prev are by default initialized as null 
	    ListNode(int x) { 
	    	val = x;
	    }
	}
} 


/************************
 * CIRCULAR LINKED LIST
 * is a linked list where all nodes are connected to form a circle. 
 * There is no NULL at the end. A circular linked list can be a singly circular linked list or doubly circular linked list.
 */