// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non decreasing array.
// -10^9 <= target <= 10^9
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
  var l = 0;
  var r = nums.length - 1;
  var leftBound = -1;
  var rightBound = -1;

  while (l <= r) {
    var mid = l + parseInt((r - l) / 2);
    console.log(mid, nums[mid]);
    if (nums[mid] === target) {
      leftBound = mid;
      r = mid - 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  l = 0;
  r = nums.length - 1;

  while (l <= r) {
    mid = l + parseInt((r - l) / 2);
    if (nums[mid] === target) {
      rightBound = mid;
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return [leftBound, rightBound];
};
