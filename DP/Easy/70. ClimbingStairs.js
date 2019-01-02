/**
 * @param {number} n
 * @return {number}
 */


 /*
  * Note: 
  * - Memoization is for Top-Down approaches
  * - Tables are for Bottom-up approaches
  */

 
//Even simpler: it is basically Fibonnaci -> time & space: O(n)
//ITERATIVE approach = Bottom-Up
var climbStairs = function(n) {
    
    if(n == 0) return 0;
    if(n == 1) return 1;
    let dp = [];
    dp[1] = 1; dp[2] = 2;
    
    for(let i=3; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
    
};

/*

- Recursion problem:
    - always have trivial solution: 1 + 1 + 1 + ... (n times)
    
    var = n, steps
    output(n) = output(n-1) + output(n-2)
    
    1 -> 1
    2 -> 2  = 1 + 1 
    3 -> 3  = 1 + 2
    4 -> 5  = 2 + 3
    5 -> 8  = 3 + 5


*/

//BAD: time O(2^n) -> recursion tree --> we need memoization to increase speed
//RECURSIVE approach = Top-Down
var climbStairs = function(n) {
    
    //input checking
    if(n <= 0) return 0;
       
    if(n == 1) {
        return 1;
    } else if(n == 2) {
        return 2;
    } else {
        return climbStairs(n-1) + climbStairs(n-2);
    }
    
};



//Add MEMOIZATION: time O(n) -> we changed recursion to go forward: output(n+2) 
var climbStairs = function(n) {
    let memo = [];
    
    return climbStairsMemo(0, n, memo);
    
};

let climbStairsMemo = function(i, n, memo) {
    //input checking
    if(n < i) return 0;
    
    if(memo[i] > 0) return memo[i];
       
    if(n == i) {
        return 1;
    } else if(n == i-1) {
        return 2;
    } else {
        memo[i] = climbStairsMemo(i+1,n,memo) + climbStairsMemo(i+2,n,memo); 
        return memo[i];
    }
}