/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

/*
 * ALGO:
 *      1. First, sort nums. 
 *      2. Loop through each element of nums. This element will be the first of the triplet (its smallest value).
 *      3. If positive, it means that it's impossible to get a sum of 0. And as nums is sorted, we don't have anymore triplets. Return result.
 *      4. Else, for each element in nums, create 2 pointers: left and right. Move left and right until they meet.
 *      5. Check when sum = 0.
 *      6. If at some point for 1st or 2nd element we encounter same elment, we skip it.
 *         This way, we don't repeat triplets because we never take again elements that come before the loop element i.
 */
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
        List<List<Integer>> result = new LinkedList<>();
        if(nums.length < 3) return result;
        
        Arrays.sort(nums);
        
        for(int i=0; i<nums.length-2; i++) {
            if(nums[i] > 0) return result;
            if(i>0 && nums[i] == nums[i-1]) continue;
            
            int left = i+1;
            int right = nums.length-1;
            
            while(left < right) {
                if(left > i+1 && nums[left] == nums[left-1]) {
                    left++;
                    continue;
                }
                int sum = nums[i] + nums[left] + nums[right];
                if(sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    left++;
                    right--;
                } else if(sum > 0) {
                    right--;
                } else {
                    left++;
                }
                
            }
        }
        
        return result;
    }
}