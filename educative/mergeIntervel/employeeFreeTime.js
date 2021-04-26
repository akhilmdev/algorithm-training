// Employee Free Time (hard) #
// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee.
// Our goal is to find out if there is a free interval that is common to all employees.
// You can assume that each list of employee working hours is sorted on the start time.

// Example 1:

// Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
// Output: [3,5]
// Explanation: Both the employees are free between [3,5].
// Example 2:

// Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
// Output: [4,6], [8,9]
// Explanation: All employees are free between [4,6] and [8,9].
// Example 3:

// Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
// Output: [5,7]
// Explanation: All employees are free between [5,7].

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
// [[1,3], [2,4], [3,5], [7, 9]]
function employeeFreeTime(Times) {
    let timeing = []
    for(let i = 0; i< Times.length; i++) {
        timeing.push(...Times[i]);
    }
    console.log(timeing)

    timeing = timeing.sort((a,b) => a.start - b.start);

    let index = 1;
    const currentTiming = timeing[0];
    const freeTiming = [];


    while(index < timeing.length) {
        if (currentTiming.end < timeing[index].start) {
            freeTiming.push([new Interval(currentTiming.end, timeing[index].start)])
            currentTiming.start = timeing[index].start;
            currentTiming.end = timeing[index].end;
        } else {
            currentTiming.start = Math.min(currentTiming.start, timeing[index].start);
            currentTiming.end = Math.max(currentTiming.end, timeing[index].end);
        }
        index += 1;
    }
    return freeTiming;
}

// Time => O(N * log(N))
// Space => O(N)

const time = [[new Interval(1,3)], [new Interval(2,4)], [new Interval(3,5), new Interval(7,9)]]
console.log((employeeFreeTime(time)))