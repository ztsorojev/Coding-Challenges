/*
You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

----------
Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1

---------
Example 2:

Input: coins = [2], amount = 3
Output: -1


Note:
You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//ITERATIVE APPROACH: bottom-up
var coinChange = function(coins, amount) {
    if(amount === 0) return 0;
    if(coins.length <=0) return -1;

    let dp = {};
    dp[0] = 0;
    
    for(let i = 1; i<=amount; i++) {
        let min = -1;
        for(let coin of coins) {            
            if(i - coin >= 0 && dp[i - coin] !== -1) {
                let tmp = dp[i - coin] + 1;
                min = (min < 0)? tmp : ((tmp < min)? tmp : min);
           }       
        }
        dp[i] = min; 
    }
    return dp[amount];
}

//OTHER ITERATIVE APPROACH:
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1);
    dp[0] = 0;
    let max = amount + 1;
    for (let i=1; i<=amount; i++) {
        dp[i] = max;  
        coins.forEach(coin => {if(i-coin >= 0) dp[i] = Math.min(dp[i], dp[i-coin]+1)});
    }
    return dp[amount] === max ? -1 : dp[amount];
};



//RECURSION APPROACH: Top-Down --> use memoization
//Time: O(C * n), where C is number of coins and n is amount
//Space: O(n), extra space for memoization
var coinChange = function(coins, amount) {
    
    if(amount < 1) return 0;
    if(coins == null) return -1;
    let memo = {};
    return coinChangeS(coins, memo, amount);

};

let coinChangeS = function(coins, memo, amount) {
    
    if(amount < 0) return -1;
    if(amount == 0) return 0;
    if(memo[amount]) {
        return memo[amount];
    } 
    
    let min = Number.MAX_SAFE_INTEGER;
    
    for(let coin of coins) {
        let res = coinChangeS(coins, memo, amount - coin);
        if(res >= 0 && res < min) {
            min = res + 1;
        }
    }

    memo[amount] = (min == Number.MAX_SAFE_INTEGER)? -1 : min;
    
    return memo[amount]; 
}


/*

coints = [1,2,5]; amount = 10;

output: 2 ---> 5 + 5 = 10

1. Brute force:
    a. Take biggest coin: see how many we need
    b. If needed, take the 2nd biggest coins
    c. Continue until you reach amount
    

2. Recursion (DP)
    
    amount = 10 -> output: 2
    
    1 -> 1
    2 -> 1
    3 -> 2 = 1 + 1  -> output(3) = output(1) + 1
    4 -> 2 = 2 + 2  -> output(4) = output(3)
    5 -> 1 
    6 -> 2 = 5 + 1  -> output(6) = output(6-1) + 1 = output(5) + 1
    7 -> 2 = 5 + 2  -> output(7) = output(7-2) + 1
    8 -> 3 = 5 + 2 + 1 -> 

    Recursion:
    
        output(n) = output(n - c_last) + 1
    
    with c_last being the last coin added that we need. 
    As we don't know which coin will be c_last, we iterate over all coins and take the min:
    
        output(n) = min_i output(n - c_i) + 1
        
        with output(0) = 0

*/


//ATTENTION: this is WRONG - bc you don't always take max number of the biggest coin as it might not work at the end
// ex: coins=[2 5]; amount=16 --> if we take 3 of 5 we have no solution. The right way is 2 of 5 and 3 of 2.
//You have take for each coin i, something inside [0, max_i] so there are more case to test
var coinChange = function(coins, amount) {
    
    if(amount < 0) return 0;
    if(coins == null) return -1;
    
    let coins_sorted = coins.sort(function(a,b) {return a-b;});
    
    let output = 0;
    let n = coins.length;
    for(let i=n-1; i>=0; i--) {
        if(coins_sorted[i] <= amount) {
            let tmp = Math.floor(amount/coins_sorted[i])
            output += tmp;
            console.log(output);
            amount -= tmp*coins_sorted[i];
        }
        if(amount == 0) return output;
    }
    return (output == 0 || amount != 0) ? -1 : output;
};