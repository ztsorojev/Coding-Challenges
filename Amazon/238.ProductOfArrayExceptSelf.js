/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal 
to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space 
for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [];
    output[0] = 1;
    let n = nums.length;
    
    //Loop forward: multiply all the values until you get to number
    for(let i=1; i < n; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }
    
    //Loop backwards: same thing
    let right = 1;
    for(let i=n-1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }
    
    return output;
    
};


/*

1. Brute force: double loop -> Time: O(n^2)
2. We want to have 2 loops side by side.
   First loop will multiply as much as possible on one way.
   Second loop, will do the rest in reverse order.
   Time: O(n)
   Space: O(1)

*/