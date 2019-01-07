/*
Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:
Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.


Example 2:
Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.


/**
 * @param {string} s
 * @return {number}


    Algo: sliding window
        --> but it's a modified version
        --> hash table: key = letter and val = number of times it appears
        --> we will add every element to hash table and when size hash is > 2, 
            it means we encountered a 3rd type of letter. So we enter into a new subarray.
        --> To keep it efficient: we will remove elements at beginning of subarray until 
            we only have 2 types of elements in subarray.
            --> because otherwise, we would just keep stopping at the same index for the given
                subarray and never get an longer length.

 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let map = new Map();
    let left = 0, right = 0, max = 0;
    while(right < s.length) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        right++;
        
        while(map.size > 2) {
            map.set(s[left], map.get(s[left]) - 1);
            if(map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left++;
        }
        
        max = Math.max(max, right-left);
    }
    return max;
};