/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

----------
Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2

Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

----------
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6

Note:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.

/**
 * @param {number[]} nums
 * @return {number}
 */
//Time: O(n) and Space: O(3n) = O(n)
var findShortestSubArray = function(nums) {
    let hash = {}, left = {}, right = {};
    let max = 0;
    let maxKeys = {};
    
    for(let i=0; i<nums.length; i++) {
        let x = nums[i];
        if(typeof hash[x] === 'undefined') {
            hash[x] = 1;
        } else {
            hash[x] += 1;
        }
        
        //we will only add left once the 1st time we see x
        if(typeof left[x] === 'undefined') left[x] = i; 
        
        //right will be updated until the end where we reach the last occurence of x
        right[x] = i;
        
        //keep track of max occurence
        if(hash[x] > max) {
            max = hash[x];
            maxKeys = {}; 
            maxKeys[x] = max;
        } else if(hash[x] === max) {
            maxKeys[x] = max;
        }
    }
    
    let min_length = nums.length;
    for(let x in maxKeys) {
        let l = right[x] - left[x] + 1;
        if(l < min_length) {
            min_length = l;
        }
    }
    
    return min_length;
};



/*


1. Create hash table where keys = all values in array and values = #occurrences. Also keep track for each element of their
   1st occurence in left{} and last occurrence in right{}
2. While building hash table, keep track of keys with max occurrences
3. Loop again through nums, for eack max key, find first and last occurence in nums.
4. length of subarray = first - last
5. Return length min subarray


*/