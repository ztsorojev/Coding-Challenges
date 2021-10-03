/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented 
into a space-separated sequence of one or more dictionary words.

Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.


Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

*/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//IDEA: use an array of booleans to store incrementally when output true. If stays true until the end, return true;
var wordBreak = function(s, wordDict) {
    
    let len = s.length;
    let dp = [];
    dp[0] = true; //dp[i] is true if s substring of length i is breakable
    
    for(let i = 1; i<len+1; i++) {        
        for(let j = 0; j<i; j++) {
            let str = s.substring(j, i)
            if(dp[j] && wordDict.includes(str)) {
                dp[i] = true;
                console.log(str)
            }
        }
    }
    
    if(dp[len] === null || dp[len] === undefined) return false;
    
    return dp[len];
    
};





//DON'T WORK: using a double loop is simpler
var wordBreak = function(s, wordDict) {
    
    if(s.length === 0 || s == null || s == 'undefined') return true;
    
    //if when we remove all whitespaces, string is empty then we are good
    if(s.replace(/\s/g, '').length === 0) return true;
    
    let len = wordDict.length;
    for(let i = 0; i<len; i++) {
        let idx = s.indexOf(wordDict[i]);
        
        if(idx >= 0) {
            console.log(s);
            let s_remaining = s.slice(0, idx) + " " + s.slice(idx + wordDict[i].length);
            //console.log(s_remaining);
            let wordIsBreakable = wordBreak(s_remaining, wordDict);
            if(wordIsBreakable) return true;
        }
    }
    
    return false;
    
    
};



/*

s = "helloworld"; wordDict = ['hello', 'world'];
output -> "hello world"

1. Brute Force: For each word in wordDict, check if it is contained in s (s.indexOf(wordDict[i]))
                Each time it is, remove it from s and add a " " instead. 
                Iterate for all other words in wordDict on the remaining s.
                At the end, if s contains character other than " ": false.


s = "wor ld"

2. Create object to store remaining s after word removed
    ex: s = "worhellold"
        s -> "wor" "hello" "ld"
        obj = {0: "wor", 8: "ld"}
        
        
   Recursion: go through array once for all elements. If element is contained, 
              recursion on s where word has been removed.

*/