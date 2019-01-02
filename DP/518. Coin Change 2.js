/*
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

---------
Example 1:
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

----------
Example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

---------
Example 3:
Input: amount = 10, coins = [10] 
Output: 1


/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}

   IDEA:
    1. Create array to track all possible responses dp(n) until n = amount
    2. Iteratively fill this array for every coin
    3. Formula: dp(n) = previous_dp(n) + dp(n-curr_coin)

    Check more detailed explanation here: https://www.geeksforgeeks.org/understanding-the-coin-change-problem-with-dynamic-programming/

 */
var change = function(amount, coins) {
    //We create array of size amount + 1 so we can set initial condition for n = 0
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    
    for(const coin of coins){
        //we only use coins bigger than current coin to avoid repititions
        for(let i = coin; i < dp.length; i++){
            dp[i] += dp[i - coin];
        }
    }
    
    return dp[amount]
};




/*****************************************************************/
/* THIS DOESN'T WORK!

    BRUTE FORCE: 
    1. For each coin in coins
    2. Find max number of this coins that we can use
            --> when amount % coin == 0, it means we got max coins that form amount -> count++; and break; loop
    3. Depending on this amount, find max number of coins for all the rest
    4. Decrease this max amoutn by one and repeat steps 1 to 3
*/
/*
var change = function(amount, coins) {
    if(coins.length <= 0) return 0;
    if(coins.length === 1 && amount % coins[0] === 0) return 1;

    let output = 0;

    for(let i=0; i<coins.length-1; i++) {
        let coin = coins[i];
        let n = Math.floor(amount / coin);

        for(let k=n; k>0; k--) {
            let currAmount = k*coin;
            if(currAmount === amount) output++;
            else {
                for(let j=i+1; j<coins.length; j++) {
                    let coin2 = coins[j];
                    let amountLeft = amount - currAmount;
                    if(coin2 !== coin && (amountLeft % coin2 === 0)) {
                        output++;
                        break;
                    } else if(coin2 !== coin && (amountLeft % coin2 !== 0)) {
                        let n2 = Math.floor(amountLeft / coin2);
                        currAmount += n2;
                    }
                }
            }
        }
    }
    if(amount % coins[coins.length-1] === 0) output++;
    
    return output;
};
