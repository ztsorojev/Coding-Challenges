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


/**
 * @param {string} s
 * @return {boolean}

 * - Put on bottom of stack every opening bracket we see.
 * - If we encounter closing bracket, check top of stack. If it is the matching opening bracket, pop it out of stack. Else, it means we have invalid expression -> return false.
 * - At the end, if stack empty, return true. Otherwise, return false.

 */
var isValid = function(s) {
    if(s === "") return true;
    let stack = [];
    let mapChar = {')':'(', '}':'{', ']':'['};  //used to access brackets faster
    
    for(let c of s) {
        if(c === '(' || c === '{' || c === '[') {   //we can also do instead: Object.values(mapChar).includes(c)
            stack.push(c);
        } else {
            if(mapChar[c] === stack[stack.length-1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !(stack.length > 0);
}



/*************************************************************/


// Doesn't cover all cases! Example: "([)]" returns true when it should be false!
var isValid = function(s) {
    if(s === "") return true;
    let parentheses = [], curly = [], square = [];
    let close1 = true, close2=true, close3=true;
    for(let i=0; i<s.length; i++) {
        if(s.charAt(i) === ')' || s.charAt(i) === '(') {
            parentheses.push(s.charAt(i));
            close1 = checkClose(parentheses);
        } else if(s.charAt(i) === '{' || s.charAt(i) === '}') {
            curly.push(s.charAt(i));
            close2 = checkClose(curly);
        } else if(s.charAt(i) === '[' || s.charAt(i) === ']') {
            square.push(s.charAt(i)); 
            close3 = checkClose(square);
        }
        if(!close1 || !close2 || !close3) return false;
    }
    if(parentheses.length ===1 || curly.length ===1 || square.length===1) return false;
    return true;
};

//only checks for array of length 2
var checkClose = function(arr) {
    if(arr.length === 2) {
        if((arr[0] === '(' && arr[1] === ')') || (arr[0] === '{' && arr[1] === '}') || (arr[0] === '[' && arr[1] === ']') ) {
            arr = []; //we reset array
            return true;
        } else {
            return false;
        }
    }
    return true;
}

/*

- Create hashmap that contains all symbols in order
- If first element one of )}], return false
- Create 3 arrays for each type of bracket, array size max 2
- Every time appears, store in corresponding array. When rightly closed, reset array. If not, return false.
*/