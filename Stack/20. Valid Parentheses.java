/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

----------          | ----------          | ----------          | ----------          | ----------
Example 1:          | Example 2:          | Example 3:          | Example 4:          | Example 5:
                    |                     |                     |                     |
Input: "()"         | Input: "()[]{}"     | Input: "(]"         | Input: "([)]"       | Input: "{[]}"
Output: true        | Output: true        | Output: false       | Output: false       | Output: true

*/

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character,Character> map = new HashMap<>();
        
        map.put('(', ')'); map.put('{', '}'); map.put('[', ']');
        
        for(int i=0; i<s.length(); i++) {
            Character c = s.charAt(i);
            Character top = stack.isEmpty() ? '#' : stack.peek();   //if stack empty, set dummy value to top
            if(c.equals(map.get(top))) {                            //ATTENTION: use .equals() to compare values of Character objects
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        
        return stack.isEmpty();
    }
}