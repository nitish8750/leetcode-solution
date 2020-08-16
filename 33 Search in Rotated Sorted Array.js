// Given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You should search for target in nums and if you found return its index, otherwise return -1.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

// Constraints:

// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// All values of nums are unique.
// nums is guranteed to be rotated at some pivot.
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    var mid = parseInt((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] >= nums[left]) {
      // correct order

      if (nums[left] <= target && target < nums[mid]) {
        // target is within the correct order part
        right = mid - 1;
      } else {
        // target is not within the correct order part
        left = mid + 1;
      }
    } else {
      // incorrect order
      if (nums[mid] < target && target <= nums[right]) {
        // target is within the correct order part
        left = mid + 1;
      } else {
        // target is not within the correct order part
        right = mid - 1;
      }
    }
  }

  return -1;
};
