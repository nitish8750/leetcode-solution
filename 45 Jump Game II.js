// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// Example:

// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  var curMax = 0;
  var nJumps = 0;
  var i = 0;
  var n = nums.length;

  while (curMax < n - 1) {
    var lastMax = curMax;
    // go through covered area
    for (; i <= lastMax; i++) {
      curMax = Math.max(curMax, i + nums[i]);
    }
    nJumps++;
    // if cannot make progress in the covered area, give up
    if (lastMax === curMax) {
      return -1;
    }
  }

  return nJumps;
};
