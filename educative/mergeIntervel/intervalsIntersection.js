// Problem Statement #
// Given two lists of intervals, find the intersection of these two lists.
// Each list consists of disjoint intervals sorted on their start time.

// Example 1:

// Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// Output: [2, 3], [5, 6], [7, 7]
// Explanation: The output list contains the common intervals between the two lists.
// Example 2:

// Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// Output: [5, 7], [9, 10]
// Explanation: The output list contains the common intervals between the two lists.

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

function intervalsIntersection(interval_a, interval_b) {

    let currentIndex_b = 0;
    let currentIndex_a = 0;
    const newIntervals = [];

    while (currentIndex_b < interval_b.length) {
        currentIndex_a = 0;
        let start = interval_b[currentIndex_b].start;
        let end = interval_b[currentIndex_b].end;
        while ((start !== 0 || end !== 0) && currentIndex_a < interval_a.length) {
            console.log(start, end, currentIndex_a)
            if (start === 0 && end >= interval_a[currentIndex_a].start) {
                newIntervals.push(returnNewInterval(interval_a, currentIndex_a, interval_b, currentIndex_b));
                end = 0;
            }
            if (start && start <= interval_a[currentIndex_a].end) {
                newIntervals.push(returnNewInterval(interval_a, currentIndex_a, interval_b, currentIndex_b));
                start = 0;
            }


            currentIndex_a += 1;
        }
        currentIndex_b += 1;
    }
    return newIntervals;
}

function returnNewInterval(interval_a, currentIndex_a, interval_b, currentIndex_b) {
    const newInterval = new Interval(null, null);
    newInterval.start = Math.max(interval_a[currentIndex_a].start, interval_b[currentIndex_b].start)
    newInterval.end = Math.min(interval_a[currentIndex_a].end, interval_b[currentIndex_b].end)
    return newInterval;
}


// Time => O(N^2);
// space => O(N)

const intervalsIntersection2 = (interval_a, interval_b) => {

    let index_a = 0;
    let index_b = 0;

    const newIntervals = [];

    while(index_a < interval_a.length && index_b < interval_b.length) {
        const a_overlaps_b = interval_a[index_a].start >= interval_b[index_b].start && interval_a[index_a].start <= interval_b[index_b].end;

        const b_overlaps_a = interval_b[index_b].start >= interval_a[index_a].start && interval_b[index_b].start <= interval_a[index_a].end;

        if (a_overlaps_b || b_overlaps_a) {
            newIntervals.push(
                new Interval(
                    Math.max(interval_a[index_a].start, interval_b[index_b].start),
                    Math.min(interval_a[index_a].end, interval_b[index_b].end)
                )
            )
        }

        if (interval_a[index_a].end < interval_b[index_b].end) {
            index_a += 1;
        } else {
            index_b += 1;
        }
    }
    return newIntervals;
}

// Time => O(N)
// space => O(N)

const intervals_a = [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)]
const intervals_b = [new Interval(2, 3), new Interval(5, 7)]
console.log(intervalsIntersection2(intervals_a, intervals_b))
