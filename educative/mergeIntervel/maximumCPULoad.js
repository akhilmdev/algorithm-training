
// Maximum CPU Load (hard) #
// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running.
// Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// Example 1:

// Jobs: [[1,4,3], [2,5,4], [7,9,6]]
// Output: 7
// Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
// jobs are running at the same time i.e., during the time interval (2,4).
// Example 2:

// Jobs: [[6,7,10], [2,4,11], [8,12,15]]
// Output: 15
// Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.
// Example 3:

// Jobs: [[1,4,2], [2,4,1], [3,6,5]]
// Output: 8
// Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4]. 

class CPUCycle {
    constructor(start, end, cpuLoad) {
        this.start = start;
        this.end = end;
        this.cpuLoad = cpuLoad;
    }
}
// Jobs: [[1,4,2], [2,4,1], [3,6,5]]
function maximumCPULoad(cpuCycles) {
    cpuCycles = cpuCycles.sort((a, b) => a.start - b.start);

    let maxLoad = cpuCycles[0].cpuLoad;
    let index = 1;
    let currentCPUCycle = cpuCycles[0];
    let cpuLoad = cpuCycles[0].cpuLoad;

    while(index < cpuCycles.length) {
        if (currentCPUCycle.end > cpuCycles[index].start) {
            currentCPUCycle.start = Math.max(currentCPUCycle.start, cpuCycles[index].start);
            currentCPUCycle.end = Math.min(currentCPUCycle.end, cpuCycles[index].end);
            cpuLoad += cpuCycles[index].cpuLoad;
        } else {
            currentCPUCycle.start = cpuCycles[index].start;
            currentCPUCycle.end = cpuCycles[index].end;
            cpuLoad = cpuCycles[index].cpuLoad;
        }
        maxLoad = Math.max(maxLoad, cpuLoad);
        index += 1;
    }
    return maxLoad;
}

// Time => O(N * log(N))
// Space => O(N)

const cpu = [new CPUCycle(6,7,10), new CPUCycle(2,4,11), new CPUCycle(8, 12, 15), ]

console.log(maximumCPULoad(cpu))