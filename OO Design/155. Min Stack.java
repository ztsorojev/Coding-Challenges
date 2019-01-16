/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/


class MinStack {

    Stack<Integer> stack;
    int min = Integer.MAX_VALUE;
    
    /** initialize your data structure here. */
    public MinStack() {
        this.stack = new Stack<>();
    }
    
    //Idea: keep last minimum value before each node (if it changes)
    public void push(int x) {
        if(x <= min) {
            stack.push(min);
            min = x;
        } 
        stack.push(x);
    }
    
    public void pop() {
        // if pop operation could result in the changing of the current minimum value, 
        // pop twice and change the current minimum value to the last minimum value.
        if(stack.pop() == min) min = stack.pop();
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */

/***********************************************************************/
/* There is something wrong here with the pop() or push() */
class MinStack {

    Stack<Integer> stack;
    int min;
    int secondMin;
    
    /** initialize your data structure here. */
    public MinStack() {
        this.stack = new Stack<>();
    }
    
    public void push(int x) {
        if(stack.isEmpty()) {
            stack.push(x);
            min = x;
            secondMin = x;
        } else {
            stack.push(x);
            if(x < min && x < secondMin) min = x;
            else if(x > min && x < secondMin) secondMin = x;
        }
    }
    
    public void pop() {
        int x = stack.peek();
        stack.pop();
        if(x == min) {
            int idx = stack.search(x);
            if(idx < 0) min = secondMin;
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */