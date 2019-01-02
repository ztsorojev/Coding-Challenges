/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).

---------
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

----------
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

   SMARTER:
    -> we actually don't need to find the pivot
    -> we can just apply Binary Search, then if nums[mid] > nums[left]: we know that every between left and mid is sorted, 
       so we can just apply simple binary search on this region.
    -> same thing for the right side
    --> In total, that means we do binary search on the two side: that's O(2log n) = O(log n)

 */
var search = function(nums, target) {
    if(nums.length <= 0) return -1;

    let mid = 0, left=0; right = nums.length-1;

    while(left<=right) {
        mid = Math.floor((left+right)/2);
        if(nums[mid] == target) return mid;
        //if the left side is sorted
        if(nums[mid] > nums[left]) {
            //check if target is in range
            if(target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            
        } else {
            if(target <= nums[right] && target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
    
};





/*************************************************************************/



/**

    Time: O(log n)
    --> Binary Search
    --> Problem: nums is not sorted, it is rotated
    --> Solution: 2 parts of it are sorted, we need to find the index of pivot

    1. Go through array and when there is a decrease, this is index of pivot
    2. Split array space based on this pivot
    4. If target == nums[pivot]: return pivot;
    3. If target > nums[pivot-1]: go to right half
       Else: to to left half
    4. Continue loop
    5. If we finish loop without returning, target wasn't in nums -> return -1;


 */
var search = function(nums, target) {
    if(nums.length <= 0) return -1;
    
    //ATTENTION: to find the pivot, we can't just loop because that would be O(n). The requirement is to have O(log n)
    let pivot = nums.length;  
    let left=0, right = nums.length-1;

    let mid = 0;
    
    while(left<=right){
        mid = Math.floor((left+right)/2);
        //if there is a decrease, we found pivot
        if(nums[mid+1]<nums[mid]) {
            pivot = mid+1;
            return pivot;
        }
        if(nums[mid]<nums[mid-1]) {
            pivot = mid;
            return pivot;
        }
        //left part is ascending (sorted), search in right part
        if(nums[mid] > nums[left]) {
            left=mid+1;
        } else {
            right=mid-1;
        }
    }

    left=0; right = nums.length-1;

    //Split the search area based on pivot and select region where target will be
    if(nums[pivot] === target) return pivot;
    if(pivot > 0 && nums[pivot-1] >= target) {
        right = pivot-1;
    } else {
        left = pivot;
    }


    while(left<=right) {
        mid = Math.floor((left+right)/2);
        if(nums[mid] == target) return mid;
        //if the left side is sorted
        if(nums[mid] > target) {
            //check if target is in range
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
    
};

