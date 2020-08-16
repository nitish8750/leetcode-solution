// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// Example:

// Input: 4
// Output: [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  var res = [];
  helper(n, 0, [], res);
  return res;
};

var helper = function (n, row, columnForRow, res) {
  if (row === n) {
    var item = [];

    for (var i = 0; i < n; i++) {
      var strRow = "";
      for (var j = 0; j < n; j++) {
        if (columnForRow[i] === j) {
          strRow += "Q";
        } else {
          strRow += ".";
        }
      }

      item[i] = strRow;
    }

    res.push(item);
    return;
  }

  for (i = 0; i < n; i++) {
    columnForRow[row] = i;

    if (isValid(row, columnForRow)) {
      helper(n, row + 1, columnForRow, res);
    }
  }
};

var isValid = function (row, columnForRow) {
  for (var i = 0; i < row; i++) {
    // 1. don't have to worry about values on the same column since it will onnly be set once
    // 2. same column, columnForRow[row] === columnForRow[i]
    // 3. checking both left and right diagonal, Math.abs(columnForRow[row] - columnForRow[i]) === row - i
    //   Math.abs(columnForRow[row] - columnForRow[i]) is checking both left and right diagonal
    if (
      columnForRow[row] === columnForRow[i] ||
      Math.abs(columnForRow[row] - columnForRow[i]) === row - i
    ) {
      return false;
    }
  }

  return true;
};
