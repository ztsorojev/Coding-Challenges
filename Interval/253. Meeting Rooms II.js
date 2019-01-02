/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

----------
Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2

----------
Example 2:

Input: [[7,10],[2,4]]
Output: 1

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
//NOT FULLY WORKING!!!
var minMeetingRooms = function(intervals) {
    if(!intervals || intervals.length<=0) return 0;
    let min = 0, max = 0;
    let rooms = 1;
    
    intervals.sort((a,b) => a.start-b.start);
    //console.log(intervals)
    
    for(let i=0; i<intervals.length-1; i++) {
        let p = intervals[i];
        min = p.start;
        max = p.end;
        let mid = (min + max)/2;
        //console.log("min: " + min + " | max: " + max);
        for(let j=i+1; j<intervals.length;j++) {
            let x = intervals[j];
            let mid2 = (x.start + x.end)/2;
            if((mid2 >= min && mid2 <= max) || (mid >= x.start && mid <= x.end)) {
                rooms++;
            } else {
                //if(j>1) rooms--;
            }
        }
    }
    return rooms;
        
};


/*

IDEA: 
    - find the overlaps
    - For every interval, check if there is overlap with other intervals
    - If there is, rooms++ at least one


*/