/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4

Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/
class Solution {
    public int countPrimes(int n) {
        if(n<=2) return 0;
        
        int count = 0;
        
        // Initialized as false
        boolean[] notPrime = new boolean[n];
        
        for(int i = 2; i<n; i++) {
            if(notPrime[i] == false) {
                count++;
                
                // Set all multiples of i as non prime
                for(int j = 2; i*j < n; j++) {
                    notPrime[i*j] = true;
                }
            }
        }
        
        return count;
    }
}

/**********************************************************************************************/

class Solution {
    public int countPrimes(int n) {
        int count = 0;
        for(int i = 0; i<n; i++) {
            if(isPrime(i)) {
                count++;
            }
        }
        return count;
    }
    
    public boolean isPrime(int n) {
        // Corner case
        if(n <= 2) return false;
        
        // Check from 2 to n-1
        for(int i = 2; i<n; i++) {
            if(n % i == 0) {
                return false;
            }
        }
        
        return true;
    }
}