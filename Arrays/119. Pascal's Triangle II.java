/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.
1
11
121
1331
14641

Example:

Input: 3
Output: [1,3,3,1]


Follow up:
Could you optimize your algorithm to use only O(k) extra space?
*/
//Lower space O(k) but bigger time O(n^2)
class Solution {
    public List<Integer> getRow(int rowIndex) {
        
        List<Integer> output = new LinkedList<Integer>();
        if(rowIndex < 0) {
            return output;
        }
        
        int count = 0;
        
        while(count <= rowIndex) {
            output.add(0,1);   //put '1' at position 0 and shift the rest

            //we go from index 1 to size-1 so that we never touch the 2 edges (that stay at value 1)
            for(int i=1; i < output.size()-1; i++) {
                output.set(i, output.get(i) + output.get(i+1));
            }
            count++;
        }
        
        return output;
    }
}




/**************************************************************/
//Time: O(n) and Space: O(n)
class Solution {
    public List<Integer> getRow(int rowIndex) {

        int count = 1;
        List<Integer> prev = new LinkedList<Integer>();
        List<Integer> output = new LinkedList<Integer>();
        
        if(rowIndex==0) {
            output.add(1);
            return output;
        }
        
        prev.add(1); prev.add(1);
        output.add(1); output.add(1);
        
        while(count < rowIndex) {
            output = new LinkedList<Integer>();
            output.add(1);
            for(int i=1; i<prev.size(); i++) {
                output.add(prev.get(i-1) + prev.get(i));
            }
            output.add(1);
            prev = output;
            count++;
        }
        
        return output;
    }
}