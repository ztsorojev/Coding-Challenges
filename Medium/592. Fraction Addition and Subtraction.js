/*
Given a string representing an expression of fraction addition and subtraction, you need to return the calculation result in string format. The final result should be irreducible fraction. If your final result is an integer, say 2, you need to change it to the format of fraction that has denominator 1. So in this case, 2 should be converted to 2/1.

Example 1:
Input:"-1/2+1/2"
Output: "0/1"

Example 2:
Input:"-1/2+1/2+1/3"
Output: "1/3"

Example 3:
Input:"1/3-1/2"
Output: "-1/6"

Example 4:
Input:"5/3+1/3"
Output: "2/1"

Note:
The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
Each fraction (input and output) has format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1,10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
The number of given fractions will be in the range [1,10].
The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.



/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    if(expression.charAt(0)=='-') expression = '0/1' + expression;  //we add a 0 fraction at the beginning so that we don't have problems with the '-' sign and 0 doesn't change anything in the final result :)
    let fractions = expression.split(/[+-]/);
    let signs = '+' + expression.replace(/[^+-]/g, '');  //we need the '+' because the 1st element won't have a sign. replace() allows to remove everything that is not a '+' or '-'
    
    let nums = [], dens = [];
    for(let x of fractions) {
        let frac = x.split('/');
        nums.push(parseInt(frac[0]));   //ATTENTION: I first used x.charAt(0) and x.charAt(1) to avoid splitting --> but that's wrong! because for case 10/3 charAt(0) is 1 and charAt(1) is 0 
        dens.push(parseInt(frac[1]));
    }

    let lcm = LCM(dens);
    let numSum = nums.reduce((total, num, i) => total + ((signs[i] === '-') ? -1 : 1) * num * lcm/dens[i], 0);
    
    let gcd = Math.abs(GCD(numSum, lcm));   //we only want the positive value, because numSum can be negative
    return (numSum / gcd) + '/' + (lcm / gcd);
    
};

//Least Common Multiplier = Least common denominator for us
//For 2 numbers: lcm = (a*b)/gcd(a,b);
//For 3 numbers: lcm(a,b,c) = lcm(lcm(a,b),c)
var LCM = function(dens) {
    let  lcm = dens[0];
    for(let i=0; i < dens.length; i++) {
        lcm = (dens[i]*lcm)/GCD(dens[i], lcm);
    }
    return lcm;
}

//Greatest common divisor of a and b
var GCD = function(a, b) {
    if(a === 0) return b;
    return GCD(b % a, a);
}


/*

1. Split string when see '+' or '-'. Put substrings into array.
2. For each element in array, split it based on '/'. 
3. Place numerator in num array and denominator in denom array.
4. Once finished, find common denominator.
        -> easy solution: multiply all denominators
5. Put all numerator according to this common denom
        -> multiply num by current denom/comon denom
6. Non irreductible output = sum(nums)/common_denom
7. Reducte this fraction to the max

*/