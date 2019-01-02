/*
We are given N different types of stickers. Each sticker has a lowercase English word on it.

You would like to spell out the given target string by cutting individual letters from your collection of stickers and rearranging them.

You can use each sticker more than once if you want, and you have infinite quantities of each sticker.

What is the minimum number of stickers that you need to spell out the target? If the task is impossible, return -1.
----------
Example 1:

Input:

["with", "example", "science"], "thehat"
Output: 3
Explanation:
We can use 2 "with" stickers, and 1 "example" sticker.
After cutting and rearrange the letters of those stickers, we can form the target "thehat".
Also, this is the minimum number of stickers necessary to form the target string.

---------
Example 2:

Input:

["notice", "possible"], "basicbasic"
Output: -1
Explanation:
We can't form the target "basicbasic" from cutting letters from the given stickers.

Note:
- stickers has length in the range [1, 50].
- stickers consists of lowercase English words (without apostrophes).
- target has length in the range [1, 15], and consists of lowercase English letters.
- In all test cases, all words were chosen randomly from the 1000 most common US English words, and the target was chosen as a concatenation of two random words.
- The time limit may be more challenging than usual. It is expected that a 50 sticker test case can be solved within 35ms on average.

/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    if(stickers.length <=0 || !target) return -1;
    let hash = {};
    let hashSmart = {};
    let output = 0;
    let currLetters = [];  //letters of curr sticker that are in target
    
    //Create hash table where key = stickers, and values = array of letters of current sticker that are in target
    for(let x of stickers) {
        currLetters = [];
        for(let l of target) {
            if(x.includes(l)) {
                currLetters.push(l);
            }
        }
        hash[x] = currLetters;
    }
    
    //Create a new hash table that only contains the stickers that cover max letters of target
    //These are the best to use to get min number of stickers
    for(let x of stickers) {
        for(let i of hash[x]) {
            //TO FINISH
        }
    }
    
    let min = Number.MAX_SAFE_INTEGER;
    let minSticker = stickers[0];

    for(let l of target) {
        min = Number.MAX_SAFE_INTEGER; //reset after each loop
        for(let x of stickers) {
            if(x.includes(l)) {
                let minLocal = x.length - hash[x].length;
                //console.log("x.lenght= "+x.length + " */* hash[x].length= " + hash[x].length)
                if(minLocal <= min) {
                    min = minLocal;
                    minSticker = x;
                }
            }
        }
        
       
        //if(!minSticker.includes(l)) return -1;
        
        //if we are reusing the sticker
        if(minSticker.includes(l) && !hash[minSticker].includes(l)) {
            output++;
            hash[minSticker] = minSticker.split('').filter(x => x!==l);  //we reset value because we are using it again, but we have to remove l
            
            console.log(hash[minSticker])
            console.log(output)
            continue;
        }
        
        
        if(hash[minSticker].includes(l)) {
            let idx = hash[minSticker].indexOf(l);
            hash[minSticker].splice(idx, 1)
            
        }
        
        //if we are using the sticker for the first time
        if(hash[minSticker].length === minSticker.length-1) {
            output++;
             
        }
        
        console.log(hash[minSticker])
        console.log(output)
        
        
       
    }
    
    return output;
};


/*

EXHAUSTIVE SEARCH: 
First, create hash table with keys = labels, and values = array of its letters
1. For every letter in target
2. Loop through array and check in which label it is contained
3. If there are several labels, choose the one that has been used the most (min of key.length - value.length)
4. When we use a label not used before or a label we reuse, increase counter output by 1
        --> not used before = either key.length = value.length
        --> reused = current letter contained in key but not in value (because we removed it) 
5. When we choose a label, remove the current letter from its possible values


*/


/*

EXHAUSTIVE SEARCH: 
First, create hash table with keys = labels, and values = array of its letters
1. For every letter in target
2. Loop through array and check in which label it is contained
3. If there are several labels, choose the one that has been used the most (min of key.length - value.length)
4. When we use a label not used before or a label we reuse, increase counter output by 1
        --> not used before = either key.length = value.length
        --> reused = current letter contained in key but not in value (because we removed it) 
5. When we choose a label, remove the current letter from its possible values


*/