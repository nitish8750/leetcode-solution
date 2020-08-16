// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// Note: m and n will be at most 100.

// Example 1:

// Input:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// Output: 2
// Explanation:
// There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (
    obstacleGrid === null ||
    obstacleGrid.length === 0 ||
    obstacleGrid[0].length === 0
  ) {
    return 0;
  }

  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;

  if (m === 0 || n === 0) {
    return 0;
  }

  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  var dp = [[1]];

  for (var i = 1; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      dp[0][i] = 0;
    } else if (dp[0][i - 1] === 0) {
      dp[0][i] = 0;
    } else {
      dp[0][i] = 1;
    }
  }

  for (var j = 1; j < m; j++) {
    dp.push([]);
    if (obstacleGrid[j][0] === 1) {
      dp[j][0] = 0;
    } else if (dp[j - 1][0] === 0) {
      dp[j][0] = 0;
    } else {
      dp[j][0] = 1;
    }
  }

  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
