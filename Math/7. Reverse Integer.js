/*
Given a 32-bit signed integer, reverse digits of an integer.
--------
Example 1:

Input: 123
Output: 321

---------
Example 2:

Input: -123
Output: -321

----------
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: 
[−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    let neg = (x<0)? -1 : 1;
    x = neg*x;  //we take positive value of x
    while(x>0) {
        reverse = reverse*10 + (x % 10);
        x = Math.floor(x/10);
    }
    reverse = neg*reverse;
    if(reverse <= Math.pow(2, 31)*(-1) || reverse >= Math.pow(2, 31) - 1) return 0;
    return reverse;
};


//OTHER WAY: transform the number into a string :)
var reverse = function(x) {
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    if(reverse <= Math.pow(2, 31)*(-1) || reverse >= Math.pow(2, 31) - 1) return 0;
    return reversed;
};