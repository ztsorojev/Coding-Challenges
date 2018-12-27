/*

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

----------
Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0

----------
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Time: concat() is O(n+m) and sort() is O(k.log(k)) --> Time: O((n+m).log(n+m))
// Space: O(n+m)
var findMedianSortedArrays = function(nums1, nums2) {
	/*
	let nums_r = nums1.concat(nums2);
    let nums_sorted = nums_r.sort((a,b) => a-b);
    */
    
    /* 
     * We can do better than above: create new array size n+m, simultaneously traverse nums1 and nums2, 
     * and pick smallest element. Put it in nums_r and move next index in nums_r and array that had smallest element. 
     * The other array stays at same index.
     * With this method: Time O(n+m) and Space O(n+m)
     */
    let l1 = nums1.length; let l2 = nums2.length;
    let nums_sorted = [];
    let idx = 0, idx1 = 0, idx2 = 0;
    while(idx < l1+l2) {
        let check1 = idx1 < l1; //checks if nums1[idx1] !== undefined, also covers the case nums1 = []
        let check2 = idx2 < l2;
        if(check1 && (!check2 || nums1[idx1]<nums2[idx2])) {
            nums_sorted[idx] = nums1[idx1];
            idx1++;     
        } else {
            nums_sorted[idx] = nums2[idx2];
            idx2++;
        }
        idx++;
    }
    
    let idx_middle = Math.floor((nums_sorted.length - 1) / 2);
    let median = (nums_sorted.length % 2 === 0) ? (nums_sorted[idx_middle]+nums_sorted[idx_middle+1])/2 : nums_sorted[idx_middle];
    
    return median;
};


/*

- Concat the two arrays
- Sort the resulting array
- Median = middle element if odd number of elements in array; average of 2 middle elements if even number of elements in array

*/