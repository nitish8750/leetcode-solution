// Given a set of non-overlapping intervals, insert a new interval into the intervals
// (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

// Example 1:
// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

// Example 2:
// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

// Hide Company Tags LinkedIn Google Facebook
// Show Tags
// Show Similar Problems

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

//  http://bangbingsyb.blogspot.com/2014/11/leetcode-insert-interval.html
var insert = function (intervals, newInterval) {
  let results = [];

  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    results.push(intervals[i]);
    i++;
  }

  newInterval = [
    Math.min(newInterval[0], i < intervals.length ? intervals[i][0] : Infinity),
    newInterval[1],
  ];

  while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  results.push(newInterval);
  return results.concat(intervals.slice(i, intervals.length));
};
