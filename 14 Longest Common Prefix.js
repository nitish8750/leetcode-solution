// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var len = strs.length;
  var result = "";

  if (len === 0) {
    return result;
  }

  for (var i = 0; i < strs[0].length; i++) {
    var curChar = strs[0][i];

    for (var j = 1; j < len; j++) {
      if (curChar !== strs[j][i]) {
        return result;
      }

      if (strs[j].length === i) {
        return result;
      }
    }

    result += curChar;
  }

  return result;
};
