// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

// Example 1:

// Appointments: [[1,4], [2,5], [7,9]]
// Output: false
// Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
// Example 2:

// Appointments: [[6,7], [2,4], [8,12]]
// Output: true
// Explanation: None of the appointments overlap, therefore a person can attend all of them.
// Example 3:

// Appointments: [[4,5], [2,3], [3,6]]
// Output: false
// Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}


function ConflictingAppointments(appointments) {
    appointments = appointments.sort((a, b) => a.start - b.start);

    let index = 1;
    let currentAppointment = appointments[0];
    while (index < appointments.length) {
        const b_overlaps_a = appointments[index].start < currentAppointment.end;

        if (b_overlaps_a) {
            return false;
        }
        currentAppointment = appointments[index];
        index += 1;
    }

    return true;

}

// Time => O(N * log(N));
// Space => O(N)

function ConflictingAppointmentList(appointments) {
    appointments = appointments.sort((a, b) => a.start - b.start);

    let index = 1;
    let currentAppointment = appointments[0];
    const conflictAppointments = [];
    while (index < appointments.length) {
        const b_overlaps_a = appointments[index].start < currentAppointment.end;

        if (b_overlaps_a) {
            conflictAppointments.push([currentAppointment, appointments[index]])
        }
        currentAppointment = appointments[index];
        index += 1;
    }

    return conflictAppointments;

}



const intervals = [new Interval(1,4), new Interval(2,5), new Interval(6,12)]

console.log(ConflictingAppointmentList(intervals));