/* 
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

---------                                   | ---------
Example 1:                                  | Example 2:
                                            |
Input: "babad"                              | Input: "cbbd"
Output: "bab"                               | Output: "bb"
Note: "aba" is also a valid answer.         |


/**
 * @param {string} s
 * @return {string}

    ------------------
    SMARTER:
    1. Consider each index as a center of a palindrom. In fact, there are 2n-1 possible centers and not n centers, because in "abba", the centers are both the "b".
    2. Expand each center to left and right until you find max palindrom for this center.
    3. Repeat for all centers. Keep track of max length palindrom, start and end indexes.
    4. At the end, return substring.

    --> Time: O(n^2)  - it takes O(n) to go through all centers and possibily O(n) to expand a center
    --> Space: O(1)

*/
var longestPalindrome = function(s) {
    if(s === "" || s === null || s === undefined) return "";
    
    let start = 0, end = 0, len = 0;
    
    for(let i=0; i<s.length; i++) {
        let len1 = expandCenter(s, i, i);
        let len2 = expandCenter(s, i, i+1); //ATTENTION HERE: we have to take into account case with 2 centers (e.g. "abba")
        
        len = Math.max(len1,len2);
        
        if(len > end - start) {
            start = i - Math.floor((len-1)/2);
            end = i + Math.floor(len/2);
        }
    }
    
    return s.substring(start, end+1);   //we have to do end+1, because substring() doesn't go until last index
};

//Returns length of palindrom expanded from s.charAt(i)
var expandCenter = function(s, left, right) {
    let L = left, R = right;
    while(L >= 0 && R < s.length && s.charAt(L)===s.charAt(R)) {
        R++;
        L--;
    }
    return R-L-1;
}

/*

BRUTE FORCE:
1. Find substring -> spanning window
2. Keep track of 2 pointers: left and right index of window
3. Fix left, increase right step by step until end. Keep track of max palindrom.
        - Check if palindrom: 
                * traverse through substring from left and from right until they meet in middle
                * (consider cases even and odd lengths)
                * check at each step if substr[left] = substr[right]
4. Increase left step by step.


--> Time: O(n^3) - because it's O(n^2) to find all possible substrings and O(n) to find if it's a palindrom
--> Space: O(1)  - we output the substring, no intermediate data structure needed



*/