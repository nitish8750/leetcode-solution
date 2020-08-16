// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  http://fisherlei.blogspot.com/2012/12/leetcode-next-permutation.html
var nextPermutation = function (nums) {
  var vioIndex = nums.length - 1;

  while (vioIndex > 0) {
    if (nums[vioIndex - 1] < nums[vioIndex]) {
      break;
    }
    vioIndex--;
  }

  if (vioIndex > 0) {
    vioIndex--;
    var first = nums.length - 1;
    while (first > vioIndex && nums[first] <= nums[vioIndex]) {
      first--;
    }

    var temp = nums[vioIndex];
    nums[vioIndex] = nums[first];
    nums[first] = temp;

    vioIndex++;
  }

  var end = nums.length - 1;

  while (end > vioIndex) {
    temp = nums[end];
    nums[end] = nums[vioIndex];
    nums[vioIndex] = temp;

    end--;
    vioIndex++;
  }
};
