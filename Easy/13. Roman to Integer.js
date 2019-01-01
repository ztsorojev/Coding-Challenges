/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:          | Example 2:          | Example 3:          | Example 4:
                    |                     |                     |
Input: "III"        | Input: "IV"         | Input: "IX"         | Input: "LVIII"
Output: 3           | Output: 4           | Output: 9           | Output: 58
                                                                | Explanation: L = 50, V= 5, III = 3.

/**
 * @param {string} s
 * @return {number}
 */
//SMARTER: start from the end -> the special case will be when previous character less than current character!
var romanToInt = function(s) {
    let romans = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let output = 0;
    let i = s.length;
    while(i--) {
        let curr = romans[s[i]];
        let prev = romans[s[i-1]];
        
        output += curr;
        if(prev<curr) {
            output -= prev;
            i--;
        }
    }
    return output;
};




//Time: O(n) and Space:O(m) with m, size of roman alphabet and n, length of s
var romanToInt = function(s) {
    let hash = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let output = 0;
    for(let i=0; i<s.length; i++) {
        let c = s[i];
        if(i!==s.length-1 && (c === 'I' || c === 'X' || c === 'C')) {
            let tmp = romanSpecial(c, s[i+1], hash, i);
            output += tmp;
            if(tmp !== hash[c]) i++;
        } else {
            output += hash[c];
        }  
    }
    return output;
};


var romanSpecial = function(c1, c2, hash, i) {
    let tmp = hash[c1]+hash[c2];
    if(tmp === 6*hash[c1] || tmp === 11*hash[c1]) {
        return tmp-(2*hash[c1]);
    } else {
        return hash[c1];
    }
}

/***********************************/
var romanToInt = function(s) {
    let romans = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let output = 0;
    for(let i=0; i<s.length; i++) {
        let curr = s[i];
        let next = s[i+1];
        switch(curr) {
            case 'I':
                output += (next === 'V' || next === 'X')? -1 : romans[curr];
                break;
            case 'X':
                output += (next == 'L' || next == 'C')? -10 : romans[curr];
                break;
            case 'C':
                output += (next == 'D' || next == 'M')? -100 : romans[curr];
                break;
            default:
                output += romans[curr];
        }
    }
    return output;
};


/*

1. Hash table with key-value pairs of roman-integers
2. For each character of input, get corresponding integer.
3. At each step, multiply accumulator by 10 and add curr integer
        -> ATTENTION to special cases (3):
                - (if I): IV and IX 
                - (if X): XL and XC 
                - (if C): CD and CM 
                 


*/