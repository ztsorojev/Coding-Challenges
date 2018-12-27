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