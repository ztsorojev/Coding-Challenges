/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length;
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let i=0; i < n; i++) {
        sum += nums[i];
        
        //reset if sum was negative
        if(sum < nums[i]) {
            sum = nums[i];
        }
        
        if(max < sum) {
            max = sum;
        }
    }
    
    return max;
};