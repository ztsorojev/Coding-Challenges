/**
 * @param {number[]} nums
 * @return {boolean}


 1. Hash table:
    - iterate over obj once to create table
    - if value appears more than once, only the last value will be in the property of the object
    --> so hash.length < nums.length
 */

var containsDuplicate = function(nums) {
    let hash = {};
    
    let i;
    let len = nums.length;
    for (i = len-1; i>=0; i--) {
        //BETTER: Check directly at each loop iteration if element we add is not already there!
        if(hash.hasOwnProperty(nums[i])) return true;
        hash[nums[i]] = i;
    }
    
    return false;
    
};



/*
COMPLEXITY:
    - Time: O(n)
    - Space: O(n)
*/
var containsDuplicate = function(nums) {
    let hash = {};
    
    let i;
    let len = nums.length;
    for (i = len-1; i>=0; i--) {
        hash[nums[i]] = i;
    }
    
    /* /!\ATTENTION: You can't do "hash.length" --> .length don't work on objects! */
    return (Object.keys(hash).length < len);
    
};