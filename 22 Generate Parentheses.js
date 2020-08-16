// Given n pairs of parentheses, write a function to generate all combinations of well - formed
// parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var result = [];
  var output = "";

  generate(result, output, 0, n, 0, 0);
  return result;
};

var generate = function (result, output, depth, n, left, right) {
  if (depth === 2 * n) {
    result.push(output);
    return;
  }

  if (left < n) {
    generate(result, output + "(", depth + 1, n, left + 1, right);
  }
  if (left > right) {
    generate(result, output + ")", depth + 1, n, left, right + 1);
  }
};
