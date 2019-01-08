/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49

/**
 * @param {number[]} height
 * @return {number}

   ALGO: 2 pointers
    We want to find the highest 2 bars that contain the biggest number of bars.

    - Create 2 pointers that start from beginning and end
    - Calculate the current amount of water trapped:
            water = min(height_bar)*(end-begin)
    - Keep track of max
    - do that until left=right
    - Return max
    

    Time: O(n) and Space: O(1)

 */
var maxArea = function(height) {
    let start = 0, end = height.length-1;
    let max = 0;
    while(start < end) {
        let water = Math.min(height[start], height[end])*(end-start);
        max = Math.max(max, water);
        if(height[start]<height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return max;
};
