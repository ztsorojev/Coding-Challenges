/*
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

---------
Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"

---------
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"

----------
Example 3:

Input: numerator = 2, denominator = 3
Output: "0.(6)"

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
// The trick is to notice that once remainder of division repeats, so does the divided result.
// We will do a long division (division euclidienne comme je faisais à l'école)
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0) return '0';
    if(denominator === 0) return '';
    
    let res = '';
    
    if(Math.sign(numerator) !== Math.sign(denominator)) res += '-';
    
    const n = Math.abs(numerator);
    const d = Math.abs(denominator)
    
    res += Math.floor(n / d); //ATTENTION: here we can't work with negatives because the floor() will put it higher: ex: -50/8 = -6.25 -> floor -> -7 
    console.log(res)
    
    let remainder = n % d;  //this will be a single digit between 0 and 9 (reminder of one step long divison)
    if(remainder === 0) return res;
    
    res += '.';  //dot to separate int from decimal
    
    let hash = {};
    while(remainder !== 0) {
        hash[remainder] = res.length; //this will hold the start index of the potential repeating sequence
        
        //we update remainder now
        remainder *= 10;
        res += Math.floor(remainder / d);
        remainder %= d;
        
        //we check if remainder not already in hash 
        let i = hash[remainder];
        if(typeof i !== 'undefined') return res.substring(0,i) + '(' + res.substring(i) + ')';
    }
    
    return res;
    
};
