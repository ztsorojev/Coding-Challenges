/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashTable = {};
    var complement;

    //One-pass Hash Table: better solution :)
    for(var i = 0; i<nums.length; i++) {
        complement = target - nums[i];
        if(typeof hashTable[complement] !== 'undefined') {
            return [hashTable[complement], i];
        }
        hashTable[nums[i]] = i;
        
    }
};

/*
COMPLEXITY:

    - Time: O(n)
    - Space: O(n)


Compared to brute force:
    - Time: O(n*(n-1)/2) = O(n^2)
    - Space: O(1)
*/



//Two-pass Hash Table
var twoSum = function(nums, target) {
    var hashTable = {};

    for(var i = 0; i<nums.length; i++) {
        hashTable[nums[i]] = i;
    }    
    var compliment;
    for(var j = 0; j<nums.length; j++) {
        compliment = target - nums[j];
        if(typeof hashTable[compliment] !== 'undefined' && hashTable[compliment] != j) {
            return [j, hashTable[compliment]];
        }
    }
};


/*
//MISTAKES:

1. In JS, we can define hashTable as simple objects. However, when give parameters that are variables to object, if you do: 
                                            
                                            obj.param1 = "hello" --> obj = {"param1": "hello"}

                                    Instead do:
                                            var param1 = "size";
                                            obj[param1] = 172; --> obj = {"size": 172}


2. When you check if int exists, pay attention to the case when it's 0 because if(0) returns false.
   To stay broad, do if(typeof elem !== 'undefined')

   NB: if(elem) is false for 'undefined', 'null', 0, "", NaN, false


3. Pay attention when you copy code. For two-pass hash table fct, I did loop again but put "j" var instead of "i", it messed up everything 
   and I lost time trying to figure out what was wrong.