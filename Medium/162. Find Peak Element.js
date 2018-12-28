/*
A peak element is an element that is greater than its neighbors.
Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

----------
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
			 or index number 5 where the peak element is 6.

Note:
Your solution should be in logarithmic complexity.


/**
 * @param {number[]} nums
 * @return {number}

   SMARTER:
   BINARY SEARCH: Split the search space in 2 every step of loop so we can achieve Time: O(log2(n)) :)
 */

//ITERATIVE Approach
var findPeakElement = function(nums) {
	let l=0, r=nums.length-1;
	while(l<r) {
		let mid = Math.floor((l+r)/2);
		if(nums[mid] > nums[mid+1]) { //it means a peak will for sure lie in the left half so we go there
			r = mid;
		} else {
			l = mid;
		}
	}
	return l;
}



/**********************************************************/

/**
 *
	1. Loop through nums
	2. Check if nums[i] > nums[i+1]
	    - if it is, it means that i is a peak because we are going down
	    - we know that it should be only increasing before because otherwise it would have triggered the if statement and return a value.
	3. After the loop, if no returned, it means that we are on a stricly ascending slope.
	   So the peak is the last element.

	Time: O(n) and Space: O(1)

 */
var findPeakElement = function(nums) {
    for(let i=0; i < nums.length-1; i++) {
        if(nums[i+1] < nums[i]) {
            return i;
        }
    }
    return nums.length-1;
};
