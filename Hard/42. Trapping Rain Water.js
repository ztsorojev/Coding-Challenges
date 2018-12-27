/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

Check visual diagram here: https://leetcode.com/problems/trapping-rain-water/

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

--------
Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

/**
 * @param {number[]} height
 * @return {number}

    1. Have 2 pointers: left and right.
    2. Move step by step in ONE direction until they meet (the peak). The thing is that if height is bigger
       in one direction, we know that the water level will depending on the other direction (the min).
    3. So if leftHeight < rightHeight, we move to the right. Otherwise, we move to left.
    4. Calculate the water trapped at each step as (water_level - current_heigh)


 */
var trap = function(height) {
    let water = 0;
    
    let left = 0;
    let leftHeight = 0;
    
    let right = height.length-1;
    let rightHeight = 0;

    while(left <= right) {
        if(leftHeight <= rightHeight) {
            leftHeight = Math.max(leftHeight, height[left]);
            water += leftHeight - height[left];
            left++;
        } else {
            rightHeight = Math.max(rightHeight, height[right]);
            water += rightHeight - height[right];
            right--;
        }
    }

    return water;
};



/**********************************************************************************************/

// BAD SOLUTION: doesn't always work!
var trap = function(height) {
    let decrease = true;
    let container = [];
    let water = 0;
    let i = 0;
    for(let x of height) {
        if(decrease) {
            if(container.length === 0 && x > 0) { //1st element must be > 0
                container.push(x);
            } else if (container.length >= 0 && x <= container[container.length-1]) {
                container.push(x);
            } else if (container.length >= 0 && x > container[container.length-1]) {
                decrease = false;
                if(container.length>1) {
                    container.push(x);
                    if(i === height.length -1) water += calcWater(container);
                }
                else container = [];  
            }
        } else {
            if(x > container[container.length-1]) {
                container.push(x);
            } else {
                console.log(container)
                let last = container[container.length-1];
                water += calcWater(container);
                console.log(water)
                
                container = [];
                container.push(last); //put right edge of last container first
                container.push(x);
                
                decrease = true;
            }
        }
        i++;
    }
    
    return water;
};

var calcWater = function(container) {
    //Calculate water
    let last = container.pop();
    let water_level = Math.min(container[0], last);
    let water = 0;
    for(let c of container) {
        if(water_level - c > 0) water += water_level - c;
    }
    return water;
}

/*

1. we need to find all subarrays that decrease and increase (represents hollow that can hold water)
2. once we have it, the water level will be min of height edges
3. so water contained in this subarray = sum(water height - array elements)

- To find subarrays that decrease and then increase, loop through array
- For each element, add it to subarray:
        - if 1st element: has to be > 0 
        - if 2nd element: has to be < 1st element
        - the rest can increase
        - when we have increase, and then decrease: stop subarray and computer water.
        - reset array, but keep current right top edge of water and put it as 1st element of array
        
- To keep track of decrease/increase: maintain 2 boolean var
        - at first: decrease = true and increase = false: means that it means decrease first
        - once it has decreased at least once, depending on the 2nd value we get, we check if it is decreasing again or increase: based on that we updated decrease and increase boolean var
        - if increase=true, we add values to subarray until they are increasing.

*/