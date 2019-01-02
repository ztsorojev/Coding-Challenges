/*
We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).

Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.

----------
Example 1:
Input: bits = [1, 0, 0]
Output: True

Explanation: 
The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.

----------
Example 2:
Input: bits = [1, 1, 1, 0]
Output: False

Explanation: 
The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.

Note:
1 <= len(bits) <= 1000.
bits[i] is always 0 or 1.

/**
 * @param {number[]} bits
 * @return {boolean}


    1. Loop through array bits
    2. If bit is 1, it's begining of 2-bit character so we jump 2 steps in array.
            - after jump, verify if we arrive past the last bit. 
            - If we do, it means last bit is inside 2-bit character --> return false
    3. Else we jump 1 step.
    4. If we managed to pass loop, return true;

    
    Time: O(n)
    Space: O(1)

 */
var isOneBitCharacter = function(bits) {
    //We will use this variable to check if previous bit is start of 2-bit character
    let i =0;
    while(i < bits.length) {
        if(bits[i] === 1) {
            is2bit = true;
            i = i+2;
            //if we reach end by jumping, it means last bit is in 2-bit character
            if(i === bits.length) return false;
        } else {
            i++;
        }  
    }
    return true;
};


