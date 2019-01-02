/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    if(nums == null || nums.length == 0) return 0;
    
    
    //store the max product so far
    let res = nums[0];
    
    //store current max and min of subarray finishing with nums[i]
    let max_c = res, min_c = res;
    
    let n = nums.length;
    for(let i=1; i < n; i++) {
        
        //if number is negative, multiply will make max the min and min the max
        //we swap the values
        if(nums[i] < 0) {
            let temp = max_c;
            max_c = min_c;           
            min_c = temp;
        }
        
        max_c = Math.max(nums[i], max_c * nums[i]);
        min_c = Math.min(nums[i], min_c * nums[i]);
        
        res = Math.max(res, max_c);
    }
    
    return res;
    
};

/*

[2 3 -2 4]

1. Get indexes of all negatives and 0

If size = size nums: output = 0
Else:

2. Multiply everything
- if pos: keep in accumulator, a
- if neg: keep in separate accumulator, b


*/