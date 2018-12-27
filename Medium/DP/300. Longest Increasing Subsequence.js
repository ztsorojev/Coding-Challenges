//Given an unsorted array of integers, find the length of longest increasing subsequence.
/*Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 

*/

//similar to what I wanted to do but it's with 2 loops
// Time: O(n^2) / Space: O(n)
var lengthOfLIS = function(nums) {
    let len = nums.length;
    if(len===0) return 0;
    let res = {};
    res[0] = 1;
    let max = 1;
    for(let i=1; i<len; i++) {
        let maxval = 0;
        for(let j=0; j<i; j++) {
            if(nums[i] > nums[j]) {
                maxval = Math.max(maxval, res[j])
            }
        }
        res[i] = maxval + 1;
        max= Math.max(max, res[i]);
    }
    return max;
    
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    if(len===0) return 0;
    if(len===1) return 1;
    let res = {};
    return lengthOfLIS_rec(nums, nums[0], res);
    
};

/*
 * ATTENTION!!!! -> recursion in JS can be tricky, because you have to think two ways: going deeper until return 
 *					and then path to come back to curent level
 *					Issue I had: couldn't come back to original nums array after each loop iteration
 *
 *					You don't have to do recurssive functions necessarily: sometimes you can do DOUBLE LOOPS
 *					but with some conditions to improve speed
 */
var lengthOfLIS_rec = function(nums, start, res) {
    let len = nums.length;
    
    if(len===0) {
        return 0;
    }
    if(len===1) {
        return (start <= nums[0]) ? 1 : 0;
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=1; i<len; i++) {
        //console.log(start)
        if(start < nums[i]) {
            start = nums[i];
            res[i] = 1;
        }
        
        if(res[i]) res[i] = res[i] + lengthOfLIS_rec(nums.splice(i), start, res);
        else res[i] = lengthOfLIS_rec(nums.splice(i), start, res);
       
        
        if(res[i] > max) {
            max = res[i];
            //console.log(start)
        }
        
        start = nums[i];
        console.log(start)
    }
    
    return max;
}

/*

1. Brute force: double loop
    - Time: O(n^2)
    - Space: O(n)


2. Recursion:
    - loop over each element
    - for each element: recursion: find LIS of remaining list starting after element
    - we find LIS that is starting at current element
    
    
    [10,2,7,1,18]
    
    10 -> 18 --> output = 2
    2 -> [7,18] --> output = 3
    7 -> 18 --> output = 2
    1 -> 18 --> output =2
    

*/