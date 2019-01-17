/*
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.
---------
Example 1:
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
----------
Example 2:
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

Note:
cost will have a length in the range [2, 1000].
Every cost[i] will be an integer in the range [0, 999].
*/
//---------------------------------------------------------------------
//DYNAMIC PROGRAMING
/*
 * Recursion formula: cost to get to top starting from step i 
 *
 *                   -> f[i] = cost[i] + min(f[i+1], f[i+2]);
 *
 * KEY Idea: start evaluating backwards, because at the end, we already know that f = cost[i] so we can just take f0 = f1 = 0
 *
 */
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int f1 = 0, f2 = 0;
        for(int i=cost.length-1; i>=0; i--) {
            int f0 = cost[i] + Math.min(f1,f2);
            f2 = f1;
            f1 = f0;
        }
        
        return Math.min(f1,f2);
    }
}

//DP Iteratively: basically try the 2 possibilities. At the end, take the min.
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] costM = new int[cost.length];
        costM[0] = cost[0];
        costM[1] = cost[1];

        for(int i=2; i<cost.length; i++) {
            costM[i] = cost[i] + Math.min(costM[i-1], costM[i-2]);
        }
        
        //we take the min between arriving at last step or arrive step before: that's because the next optimal action will result in arriving to top with cost of 0
        return Math.min(costM[cost.length-1], costM[cost.length-2]);
    }
}

/********************************************************************************************************/
//IDEA: for each element, check sum of going one step and two step. Do action that results in min cost.
//WRONG: it's local optimization --> no guarantee of global optimization (ex: [0,1,2,2] doesn't work)
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int c = 0;
        int n = cost.length;

        if(cost.length == 2) return Math.min(cost[0], cost[1]);
        
        //Start at index 0 or 1
        int cost_i3 = (n>3)? cost[3] : 0;
        int start1 = Math.min(cost[0]+cost[1], cost[0]+cost[2]);
        int start2 = Math.min(cost[1]+cost[2], cost[1]+cost_i3);
        int start = (start1<start2)? 0 : 1;
        
        
        for(int i=start; i<n; i++) {
            System.out.println(i);
            int cost_i1 = (i+1<n)? cost[i+1] : 0;
            int cost_i2 = (i+2<n)? cost[i+2] : 0;
            
            c += (i<n)? cost[i] : 0;
            if(cost[i]+cost_i1 >= cost[i]+cost_i2) {
                i++;
            }
        }
        
        return c;
    }
}