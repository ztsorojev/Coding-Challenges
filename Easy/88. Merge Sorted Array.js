/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//Time: O(n) and Space: O(n)
var merge = function(nums1, m, nums2, n) {
    if(nums1.length === m) return nums1;
    let nums1copy = [];
    for(let n of nums1) {
        nums1copy.push(n);
    }
    
    let p = 0, l=0; //2 pointers: we move at different speed in nums1 and nums2
    for(let i=0;i<nums1.length;i++){
        if((p < m && l < n && nums1copy[p]<nums2[l]) || (l===n)) {
            nums1[i]=nums1copy[p];
            p++;
        }
        else {
            nums1[i]=nums2[l];
            l++;
        } 
    }
};