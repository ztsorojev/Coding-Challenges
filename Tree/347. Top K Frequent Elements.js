/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}

   ALGO: use hash table -> Time: O(n)

    1. Go through array and store in hash each element and their occurences
    2. Once done, go through hash table and find k most frequent elements
        --> For that, use a variant of quickSelect O(n)


 */
var topKFrequent = function(nums, k) {
    if(nums.length <= 0) return [];
    let hash = {};
    for(let x of nums) {
        if(!hash[x]) {
            hash[x] = 1;
        } else {
            hash[x] += 1;
        }
    }

    
    //we need a way to organize the keys based on occurences
    //IDEA: place them in array where position is occurence
    let arr = [];
    for(let x of Object.keys(hash)) {
        let tmpArr = (!arr[hash[x]])? [] : arr[hash[x]];
        tmpArr.push(x);
        arr[hash[x]] = tmpArr;
    }
    
    //Now, we now the indexes are the occurences
    //So to find k biggest elements, we loop from the end
    let output = [];
    for(let i=arr.length-1; i>=0;i--){
        if(output.length > k) return output.slice(0,k);
        if(output.length === k) break;
        
        //ATTENTION: each element is an array so we have to loop through it
        //           and also, we could add more elements than k because of that so we need to check this condition
        if(typeof arr[i] !== 'undefined') {
            arr[i].forEach(e => output.push(e));
        }
    }
    return output;
}


/************************************************************/

var topKFrequent = function(nums, k) {
    if(nums.length <= 0) return [];
    let hash = {};
    for(let x of nums) {
        if(!hash[x]) {
            hash[x] = 1;
        } else {
            hash[x] += 1;
        }
    }
    return quickSelectVariant(Object.values(hash), k);
    
};


//THIS DOESN't SOLVE THE PROBLEM: BECAUSE WE RETURN VALUES AND NOT KEYS OF HASH TABLE
//Return array with k biggest values in arr
//We assume k always valid.
var quickSelectVariant = function(arr, k) {
    let randInt = Math.floor(Math.random()*arr.length);
    const pivot = arr[randInt];
    const lower = [];
    const higher = [];
    for(let num of arr) {
        if(num < pivot) {
            lower.push(num);
        } else if(num > pivot) {
            higher.push(num);
        }
    }
    if(k > higher.length) {
        return quickSelectVariant(lower, k);
    } else if(k < higher.length) {
        return quickSelectVariant(higher, k);
    }
    return higher;
}
