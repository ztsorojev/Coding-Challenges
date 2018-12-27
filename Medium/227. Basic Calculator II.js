/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

----------              | ----------              | ----------           
Example 1:              | Example 2:              | Example 3:
                        |                         |
Input: "3+2*2"          | Input: " 3/2 "          | Input: " 3+5 / 2 "
Output: 7               | Output: 1               | Output: 5


Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.

/**
 * @param {string} s
 * @return {number}
 
    1. First, remove all whitespaces from s
    2. Split s into array with separator +, -, *, / 
    3. Create array with signs only
    4. Loop through signs array
        -> if sign is + or -: push value to stack (if it's -, push opposite of value)
        -> if sign is * or /: push result of operation on last value in stack and current value
    5. After loop, sum all elements in stack to get result
    

    Time: O(n)
    Space: O(n)

 */
//Better version that below
var calculate = function(s) {
    
    //Stack
    let res = [];
        
    for(let i=0; i<s.length; i++) {
        if(!isNaN(s[i]) && )
        if(signs.charAt(i) == '+') {
            res.push(terms[i]);
            //console.log(res)
        } else if(signs.charAt(i) == '-') {
            res.push(-terms[i]);
        } else if(signs.charAt(i) == '*') {
            res.push(res.pop()*terms[i]);
        } else if(signs.charAt(i) == '/') {
            //let l = res.pop();
            //let r = Math.floor(Math.abs(l / terms[i]));
            //if(Math.sign(terms[i]) !== Math.sign(l)) r = '-' + r;   //we round it up because if negative, it will be wrong (e.g. -3/2 = -1.5 -> -2 but we need -1)
            let r = parseInt(res.pop() / terms[i]);
            res.push(r);
        }
    }
    
    return res.reduce((total, x) => total + parseInt(x),0);
};

/*********************************************/

var calculate = function(s) {

    //Remove all spaces from s
    let s2 = '';
    for(let i=0; i<s.length; i++) {
        if(s.charAt(i) !== ' ') 
            s2 += s.charAt(i);
    }
    
    
    let terms = s.split(/[-+*\/]/);
    let signs = '+' + s.replace(/[^-+*\/]/g, '');
    
    //Stack
    let res = [];
        
    for(let i=0; i<signs.length; i++) {
        if(signs.charAt(i) == '+') {
            res.push(terms[i]);
            //console.log(res)
        } else if(signs.charAt(i) == '-') {
            res.push(-terms[i]);
        } else if(signs.charAt(i) == '*') {
            res.push(res.pop()*terms[i]);
        } else if(signs.charAt(i) == '/') {
            let l = res.pop();
            let r = Math.floor(Math.abs(l / terms[i]));
            if(Math.sign(terms[i]) !== Math.sign(l)) r = '-' + r;   //we round it up because if negative, it will be wrong (e.g. -3/2 = -1.5 -> -2 but we need -1)
            res.push(r);
        }
    }
    
    return res.reduce((total, x) => total + parseInt(x),0);
};
