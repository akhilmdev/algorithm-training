/**
 * This problem was asked by Amazon.
 * There exists a staircase with N steps, and you can climb up either 1 or 2
 * steps at a time. Given N, write a function that returns the number of unique
 * ways you can climb the staircase. The order of the steps matters.
 * 
 * For example, if N is 4, then there are 5 unique ways:
 * 1, 1, 1, 1
 * 2, 1, 1
 * 1, 2, 1
 * 1, 1, 2
 * 2, 2
 * 
 * What if, instead of being able to climb 1 or 2 steps at a time,
 * you could climb any number from a set of positive integers X? For example,
 * if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
 */

 /**
  * 1,1,1,1,1
  * 2,1,1,1
  * 1,2,1,1
  * 1,1,2,1
  * 1,1,1,2
  * 2,2,1
  * 1,2,2
  * 2,1,2
  */

function staircaseClimb(steps, climbCompleted) {
    let count = 0;
    if (climbCompleted > steps) return 0;
    if (steps === climbCompleted) return 1;

    count += staircaseClimb(steps, climbCompleted + 1);
    count += staircaseClimb(steps, climbCompleted + 2);
    return count;
}

// time  => O(2^n)
// space => O(1)

//============================================================
function staircaseClimbL(steps) {
    const mems = [];
    return staircaseClimbLinear(steps, mems);
}

function staircaseClimbLinear(steps, mems) {
    if (steps <= 1) return steps;
    
    if (!mems[steps - 1]) mems[steps - 1] = staircaseClimbLinear(steps - 1, mems);
    if (!mems[steps - 2]) mems[steps - 2] = staircaseClimbLinear(steps - 2, mems);

    mems[steps] = mems[steps - 1] + mems[steps - 2];
    return mems[steps];
}

// time  => O(n)
// space => O(n)

console.log(staircaseClimbL(6)); 