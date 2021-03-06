/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

-----------
Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
----------
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


/**
 * @param {string[]} strs
 * @return {string}

   SMARTER:
    1. Set prefix to 1st element of strs: it is the max prefix we can have
    2. Loop through str and for each element, 
            -> while it doesn't contains the current prefix
            -> remove last element of prefix
    3. At the end, we will have the prefix that is contained in all elements of strs

    Time: O(S), where S is the sum of all characters in all strings
    Space: O(1)

 */
var longestCommonPrefix = function(strs) {
    if(!strs || strs.length <= 0) return "";
    let prefix = strs[0];
    for(let x of strs) {
        while(x.indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix.length <= 0) return "";
        }
    }
    return prefix;
};
    

/*************************************************************/


/**
    1. Take 1st element of strs and map all it's post prefixes to hash table
    2. Loop through strs
    3. For each element, check all possible prefixes and verify if they are in hash table
    4. Take the longest of them
    5. Keep track of the shortest of all max prefixes for each element
    6. Return this prefix after loop ends

 */
var longestCommonPrefix = function(strs) {
    if(!strs || strs.length <= 0) return "";
    let prefix = "", maxPrefixLocal = "", minPrefix = strs[0];
    let hash = {};
    for(let i of strs[0]) {
        prefix += i;
        hash[prefix] = 1;
    }
    let hasCommonPrefix = false;    //is true if current string has at least one common prefix
    for(let x of strs) {
        prefix = "";
        hasCommonPrefix = false;
        for(let i of x) {
            prefix += i;
            if(typeof hash[prefix] !== 'undefined') {
                maxPrefixLocal = prefix;
                hasCommonPrefix = true;
            } else {
                break;      //no point to continue if there are no more prefix after
            }
        }
        if(!hasCommonPrefix) return "";     //means that at least one string has no common prefix
        
        if(maxPrefixLocal.length < minPrefix.length) minPrefix = maxPrefixLocal;
    }
    return minPrefix;
};
