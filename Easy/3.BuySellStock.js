/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, min=prices[0], profit = 0, curr;
    for(let i=0; i < prices.length; i++) {
        if(prices[i]<min) {
            min = prices[i]; 
            curr = 0;
        } else {
            max = prices[i];  
            curr = max - min;  
        }
        
        if(curr > profit) profit = curr; //3

        /*
        Better: combine else and if (lines 11-16) to
            else if(prices[i] - min > profit) profit = prices[i] - min;
        */
 
    }
    return profit;
};



/*
COMPLEXITY:

    1. Brute force:
        - Time: O(n^2)
        - Space: O(1)

    2. Better approach:
        - find curr min
        - find curr max profit
        - end: output = max - min

        --> Time: O(n)
        --> Space: O(1)
        
        

*/


/*
COMPLEXITY:

    2. Better approach:
        - find min value in array
        - find max value coming after it
        - output = max - min
        
        
        [7 2 5 1 2]

*/

//BRUTE FORCE
var maxProfit = function(prices) {
    let max = 0, curr;
    for(let i=0; i < prices.length-1; i++) {
        for(let j=i+1; j< prices.length; j++) {
            curr = prices[j] - prices[i];
            if(curr > max) max = curr;
        }
    }
    return max;
};