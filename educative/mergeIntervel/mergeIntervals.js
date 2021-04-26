// Problem Statement #
// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

// Example 1:

// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
// one [1,5].

// Example 2:

// Intervals: [[6,7], [2,4], [5,9]]
// Output: [[2,4], [5,9]]
// Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

// Example 3:

// Intervals: [[1,4], [2,6], [3,5]]
// Output: [[1,6]]
// Explanation: Since all the given intervals overlap, we merged them into one.

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

function mergeInterval(intervals) {

    intervals = intervals.sort((a, b) => a.start - b.start);
    console.log(intervals)
    const newIntervals = [];

    let intervalStart = intervals[0].start;
    let intervalEnd = intervals[0].end;

    for(let i = 1; i < intervals.length; i++) {
        interval = intervals[i];
        if (intervalEnd > interval.start) {
            intervalEnd = Math.max(intervalEnd, interval.end);
            intervalStart = Math.min(intervalStart, interval.start);
            console.log(intervalStart, '___')
        } else {
            newIntervals.push(new Interval(intervalStart, intervalEnd));
            intervalStart = interval.start;
            intervalEnd = interval.end;
        }
    }
    newIntervals.push(new Interval(intervalStart, intervalEnd));
    return newIntervals;
}


const intervals = [new Interval(1, 4), new Interval(7,10), new Interval(8,14)];

console.log(mergeInterval(intervals));

// time => O(N * log(N))
// space => O(N)
