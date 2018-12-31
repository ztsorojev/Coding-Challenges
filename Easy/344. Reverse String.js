/*
Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if(!s || s==="") return "";
    let reversed = s.split('').reverse().join('');
    return reversed;
};

//Other way (same complexity actually)
var reverseString = function(s) {
    if(!s || s==="") return "";
    let reversed = "";
    for(let i=s.length-1;i>=0;i--){
        reversed += s[i];
    }
    return reversed;
};