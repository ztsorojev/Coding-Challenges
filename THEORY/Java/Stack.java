/****************************************************************
*****************************************************************
   							STACK
*****************************************************************/
/* 
	Last-in-First-out (LIFO) data structure.
	It extends class Vector with five operations that allow a vector to be treated as a stack. 

	PUSH: O(1)
	POP: O(1)

*/

Stack<T> stack = new Stack<T>();

.empty()
.pop()
.push(E item)
.peek()		//returns object at top of stack WIHTOUT removing it from stack
.search(Object o)	//returns position of object in stack


//EXAMPLES:
Stack<Character> stack = new Stack<Character>();
stack.push("C");
stack.push("E");
Character top = stack.pop();
Character c = stack.peek();

