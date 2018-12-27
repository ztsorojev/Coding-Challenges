/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

--------------------
Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

/**
 * @param {number[]} nums
 * @return {number[][]}

    1. First, sort nums. 
    2. Loop through each element of nums. This element will be the first of the triplet (its smallest value).
    3. If positive, it means that it's impossible to get a sum of 0. And as nums is sorted, we don't have anymore triplets. Return result.
    4. Else, for each element in nums, create 2 pointers: left and right. Move left and right until they meet.
    5. Check when sum = 0.
    6. If at some point for 1st or 2nd element we encounter same elment, we skip it.
       This way, we don't repeat triplets because we never take again elements that come before the loop element i.

*/
var threeSum = function(nums) {
    let result = [];
    if(nums.length<3) return result;
    
    nums.sort((a,b) => a-b);
    
    for(let i=0; i<nums.length-2; i++) { //we go until nums.length-2 because the next 2 will be in while loop below
        if(nums[i]>0) return result;
        if(i>0 && nums[i]===nums[i-1]) continue; //we want to skip it because if we get same element as before, we will get same triplet (and we don't want duplicate in our result)
         
        let left = i+1; 
        let right = nums.length-1;
        
        while(left < right) {
            
            if(left - i > 1 && nums[left] === nums[left-1]) { //skip if same element as before to avoid duplicate triplets
                left++; 
                continue;
            }
            
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            } else if(sum > 0) {
                right--;    //as array sorted, the biggest values will be at the right, so to decrease sum, we have to go to left.                      
            } else {
                left++;
            }
        }
    }
    return result;
}

/**
 * @param {number[]} nums
 * @return {number[][]}

    1. Create hash object that contains all elements in nums as keys
    2. Loop through every element in nums.
    3. For every element, we need to find other two integers in nums whose sum = opposite of this integer.
            - this means that for every element, we have to do a 2 sum
    4. Once we have the triplet, add it to result array, but first check that there are no duplicates there already.

 */

//THIS WORKS: but inefficient, very high time complexity!
var threeSum = function(nums) {
    if(nums.length<3) return [];
    let hash = {};
    let result = [];
    for(let i of nums) {
        hash[i] = 1;
    }
    for(let i of nums) {
        let triplet = twoSum(nums, i);
        triplet.forEach(t => {
            
            if(!containedArr(result,t)) {
                result.push(t);
            }
        });
    }
    return result;
};

var twoSum = function(nums, target) {
    let map = new Map();
    let complement = 0;
    let result = [];
    for(let i of nums) {
        if(map.has(i)) map.set(i, map.get(i) + 1);
        else map.set(i, 1);
    }
    for(let i of nums) {
        complement = - target - i;  //we want sum to be the opposite of the target

        if(typeof map.get(complement) !== 'undefined') {
            if((complement !== i && complement !== target && target !== i) || (complement === i && map.get(i) >= 2 && i !== target) || (complement === target && map.get(target) >= 2 && i !== target) || (target === i && map.get(target) >= 2 && i !== complement) || (complement === i && complement === target && target === i && map.get(i) >= 3)) {
                let triplet = [target, i, complement];
                result.push(triplet);
            }
        }
    }
    return result;
}

var containedArr = function(results,t) {
    let hash = {};
    for(let r of results) {

        /*for(let x of r) {
            hash[x] = 1;
        }
        for(let i=0; i<t.length; i++) {
            if(typeof hash[t[i]] === 'undefined') break;
            if(i === t.length - 1) return true;     //we finished loop without breaking, 
        }
        hash = {}; //reset after each iteration*/

        if(r.sort().join(',')=== t.sort().join(',')) {
            return true;
        }
    }
    return false;
}

