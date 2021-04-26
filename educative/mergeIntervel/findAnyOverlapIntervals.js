// Problem 1: Given a set of intervals, find out if any two intervals overlap.

// Example:

// Intervals: [[1,4], [2,5], [7,9]]
// Output: true
// Explanation: Intervals [1,4] and [2,5] overlap


class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

function findAnyOverlappingInterval(intervals) {
    intervals = intervals.sort((a, b) => a.start - b.start);
    let start = intervals[0].start;
    let end = intervals[0].end;

    for(let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        if (end > interval.start) {
            return true;
        } else {
            start = interval.start;
            end = interval.end;
        }
    }
    return false;
}


const intervals = [new Interval(1, 4), new Interval(3,8), new Interval(2,5)];

console.log(findAnyOverlappingInterval(intervals));


// time => O(N * log(N));
// space => O(N)