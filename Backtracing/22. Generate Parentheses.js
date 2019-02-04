/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

/**
 * @param {number} n
 * @return {string[]}
 
 IDEA:
    - Keep trying all posibilities, but only add parentheses that will result in a valid string
 
 */
var generateParenthesis = function(n) {
    let output = [];
    backtrack(output, "", 0, 0, n);
    return output;
};

/*
 * open     number of open parentheses '('
 * max      number of pairs, so we will have max * 2 parentheses in each final string
 */
var backtrack = function(output, curr, open, close, max) {
    if(curr.length == max * 2){
        output.push(curr);
        return;
    }
    
    //Keep adding open parentheses until we have added them all (max is the number of pairs)
    if(open < max) {
        backtrack(output, curr+"(", open+1, close, max);
    }
    
    //Also add closing parentheses: as both calls are recurssive, it means that we cover all posibilites.
    //We cover cases where we keep adding the same type and cases were we alternate.
    //ATTENTION: we can only add close parentheses if there are less than open ones!!!
    if(close < open) {
        backtrack(output, curr+")", open, close+1, max);
    }
    
    
}