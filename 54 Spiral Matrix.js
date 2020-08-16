// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix
// in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Hide Company Tags Microsoft Google Uber
// Hide Tags Array
// Hide Similar Problems (M) Spiral Matrix II

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//
var spiralOrder = function (matrix) {
  var result = [];

  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }

  var rows = matrix.length;
  var cols = matrix[0].length;

  var x = 0;
  var y = 0;

  while (rows > 0 && cols > 0) {
    if (rows === 1) {
      for (var i = 0; i < cols; i++) {
        result.push(matrix[x][y++]);
      }
      break;
    } else if (cols === 1) {
      for (i = 0; i < rows; i++) {
        result.push(matrix[x++][y]);
      }
      break;
    }

    for (i = 0; i < cols - 1; i++) {
      result.push(matrix[x][y++]);
    }
    for (i = 0; i < rows - 1; i++) {
      result.push(matrix[x++][y]);
    }
    for (i = 0; i < cols - 1; i++) {
      result.push(matrix[x][y--]);
    }
    for (i = 0; i < rows - 1; i++) {
      result.push(matrix[x--][y]);
    }

    x++;
    y++;
    cols -= 2;
    rows -= 2;
  }

  return result;
};
