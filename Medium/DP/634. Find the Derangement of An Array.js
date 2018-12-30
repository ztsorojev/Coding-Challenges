/*
In combinatorial mathematics, a derangement is a permutation of the elements of a set, such that no element appears in its original position.

There's originally an array consisting of n integers from 1 to n in ascending order, you need to find the number of derangement it can generate.

Also, since the answer may be very large, you should return the output mod 10^9 + 7.

---------
Example 1:
Input: 3
Output: 2
Explanation: The original array is [1,2,3]. The two derangements are [2,3,1] and [3,1,2].

Note:
n is in the range of [1, 106].

/**
 * @param {number} n
 * @return {number}
 */
var findDerangement = function(n) {
    if(n===0) return 1;
    if(n===1) return 0;
    let d1 = 1;
    let d2 = 0;
    let d = 0;
    
    let M = 1000000007;  //we return d % M because we can have huge resut
    
    for(let i=2; i <= n; i++) {
        d = (i-1)*(d1+d2) % M;
        d1 = d2;
        d2 = d;
    }
    return d;
    
};



/*****************************************************************
DRAFT NOTES:
-----
[1,2,3,4] -> [2,1,4,3]; [3,1,4,2]; [4,1,2,3]
    -> [4,3,2,1]: reverse everything (works if even number of elements - otherwise, swap mid-1 and mid+1 elements)
    -> [4,1,2,3]: shift everything by on    

1. [4,3,2,1]; [1,4,*3*,2]; [2,1,4,3]; [3,*2*,1,4]
2. [4,1,2,3]; [3,4,1,2]; [2,3,4,1];

BRUTE FORCE:
 1. Loop through array
 2. For every element, try to put it to all other positions
 3. Inside loop: adapt all other positions based on that 

-----
 1. Create a set of all values (Map structure)
 2. At each loop iteration, take a value from this set that is different from i+1 (index) 

*/