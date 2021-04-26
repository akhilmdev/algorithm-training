// Problem Statement #
// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

// Example 1:

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
// Example 2:

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
// Output: [[1,3], [4,12]]
// Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
// Example 3:

// Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
// Output: [[1,4], [5,7]]
// Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

function InsertInterval(intervals, insertInterval) {
    const mergeInterval = new Interval(null, null);
    const newIntervals = [];

    for(let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];

        if (mergeInterval.start === null && insertInterval.start > interval.end ) {
            newIntervals.push(interval);
            continue;
        } else if (mergeInterval.start === null) {
            mergeInterval.start = Math.min(insertInterval.start, interval.start);
        }

        if (mergeInterval.end === null && insertInterval.end > interval.start) {
            if (i === intervals.length - 1) {
                mergeInterval.end = Math.max(intervals[i].end, insertInterval.end);
                newIntervals.push(mergeInterval);
            }
            continue;
        } else if (mergeInterval.end === null) {
            mergeInterval.end = Math.max(intervals[i-1].end, insertInterval.end);
            newIntervals.push(mergeInterval);
        }

        if (mergeInterval.start && mergeInterval.end) newIntervals.push(interval)

    }
    return newIntervals;
}
const intervals = [new Interval(1,3), new Interval(5,7), new Interval(8,12)]
console.log(InsertInterval(intervals, new Interval(4, 10)))

// time => O(N);
// space => O(N)