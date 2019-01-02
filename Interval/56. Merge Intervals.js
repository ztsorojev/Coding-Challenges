/*
Given a collection of intervals, merge all overlapping intervals.

---------
Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

---------
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}

   IDEA:
    1. Sort intervals based on start time: O(n log(n))
    2. Start from empty array
    3. Each time, check if there is overlap. O(n)
       If there is, merge intervals.
        --> we easily know if there is interval with this condition on last element of merged array:  
        --> end >= start of new interval we are adding
        --> To merge: we only need to update the end value :)

    Time: O(n.log(n)) -> sort
    Space: O(n)
 */
var merge = function(intervals) {
    let merged = [];
    intervals.sort((a,b) => a.start-b.start);
    merged.push(intervals[0]);
    for(let x of intervals) {
        let last = merged[merged.length-1];
        if(last >= x.start) {
            merged[merged.length-1].end = Math.max(merged[merged.length-1].end, x.end);
        } else {
            merged.push(x);
        }
    }
    return merged;
}


/***********************************************************/
/*

Idea (brute force):
    1. Start from empty array
    2. Add intervals one by one: O(n)
    3. Each time, check if there is overlap. O(n)
       If there is, merge intervals.

    Time: O(n^2)
    Space: O(n)
*/
var merge = function(intervals) {
    let merged = [];
    let overlap = false;
    for(let x of intervals) {
        overlap = false;
        for(let i=0; i<merged.length; i++) {
            let y = merged[i];
            
            //if there is overlap
            if((x[0] <= y[1] && x[1] >= y[0])) {
                let min = Math.min(x[0], y[0]);
                let max = Math.max(x[1], y[1]);
                merged[i] = [min, max];
                overlap = true;
            }
        }
        if(!overlap) merged.push(x);
    }
    return merged;
};



/*

Idea 1 (brute force):
1. For every interval, check if it overlaps any other intervals 
2. Merge the overlapping intervals
3. Remove them from intervals array
4. Continue loop


Idea 2:
1. Start from empty array
2. Add intervals one by one: O(n)
3. Each time, check if there is overlap. O(n)
   If there is, merge intervals.
   
Idea 3:(best -> idea 2 improved)
1. Sort intervals based on start time: O(n log(n))
2. Start from empty array
3. Each time, check if there is overlap. O(n)
   If there is, merge intervals.
    --> we easily know if there is interval with this condition on last element of merged array:  
    --> end >= start of new interval we are adding
    --> To merge: we only need to update the end value :)
