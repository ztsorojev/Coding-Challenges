/*

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

-----------------------
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

/**
 * @param {string} s
 * @return {number}
 */
//Time: O(n) | Space: O(m), where m size of alphabet
var lengthOfLongestSubstring = function(s) {
    if(s === undefined || s === null || s === "") return 0;
    let len = s.length;
    if(len === 1) return 1;

    //let substring = s[0];  //we don't need to define this variable: we can get the length with hash.size :)
    let hash = new Map();   //stores as keys all the charcters of substring (in order)
    hash.set(s[0], 1);

    let max = 1;
    
    for(let i=1; i<len; i++) {
        if(hash.has(s[i])) {
            let idx = 0;
            //if s[i] already in substring, we have to delete it + every character that comes before it
            for(let key of hash.keys()) {
                idx++;
                if(key !== s[i]) hash.delete(key);
                if(key === s[i]) {
                    hash.delete(key);
                    break;
                }
            }
            hash.set(s[i], i);  //we set the character and it will go at current position (Map preserve order)
            //substring = substring.substring(idx) + s[i];
        }
        else {
            //substring += s[i];
            hash.set(s[i], i);
            max = (hash.size > max) ? hash.size : max;
        }
    }
    
    return max;
};



/*

1. Brute force: 
       a. - Go over each character of string
       b. - If next character not in current substring, add it to substring
       c. - Else, start again and this character becomes curr substring

    --> for b. use hash table: access character by key 
    
    
    "abcabcbb" 
    substring : a       hash: {a}
                ab            {a, b}
                abc           {a, b, c}
                
                
    "dvdf"
    substr: d       hash: {d}
            dv            {d, v}
            d             {d}
            df
                
*/