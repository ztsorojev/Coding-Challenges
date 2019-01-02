/*
Given an m * n matrix M initialized with all 0's and several update operations.

Operations are represented by a 2D array, and each operation is represented by an array with two positive integers a and b, which means M[i][j] should be added by one for all 0 <= i < a and 0 <= j < b.

You need to count and return the number of maximum integers in the matrix after performing all the operations.

----------
Example 1:

Input: 
m = 3, n = 3
operations = [[2,2],[3,3]]
Output: 4

Explanation: Initially, 
M = [[0, 0, 0],
 	 [0, 0, 0],
	 [0, 0, 0]]

After performing [2,2], 
M = [[1, 1, 0],
 	 [1, 1, 0],
 	 [0, 0, 0]]

After performing [3,3], 
M = [[2, 2, 1],
 	 [2, 2, 1],
 	 [1, 1, 1]]

So the maximum integer in M is 2, and there are four of it in M. So return 4.

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}

	1. Max integers will be in array composed of intersections of ops
	        -> we need to find position (x,y) = bottom-right edge of intersection square
	        -> we know that the top-left edge will also be at (0,0); because of the spec
	2. x = min(x_ops) and y = min(x_ops) where x_ops is the 1st element of array of each op in ops
	3. So maxCount = x*y


 */
var maxCount = function(m, n, ops) {
    let x = m, y = n;
    for(let i=0; i<ops.length; i++) {
        x = Math.min(x, ops[i][0]);
        y = Math.min(y, ops[i][1]);
    }
    return x*y;
};
