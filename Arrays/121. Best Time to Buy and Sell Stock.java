class Solution {
    public int maxProfit(int[] prices) {
        if(prices == null || prices.length <= 0) return 0;
        int min_price = prices[0], max_price = 0;
        int output = 0;
        for(int i = 0; i<prices.length; i++) {
            if(prices[i] > max_price) {
                max_price = prices[i];
            }
            if(prices[i] < min_price){
                min_price = prices[i];
                max_price = 0; //reset max once we have a new min
            }
            //System.out.println(min_price + " | " + max_price);
            output = Math.max(output, max_price-min_price);
        }
        return output;
    }
}


// BRUTE FORCE: O(n^2)

// ONE PASS: O(n) -> find smallest valley and largest peak following this valley
