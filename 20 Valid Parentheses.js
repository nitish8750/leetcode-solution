// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine
// if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  var index = 0;
  while (index < s.length) {
    var c = s[index];

    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else {
      var oldC = stack.pop();

      if (oldC === "(" && c !== ")") {
        return false;
      } else if (oldC === "[" && c !== "]") {
        return false;
      } else if (oldC === "{" && c !== "}") {
        return false;
      } else if (oldC === undefined) {
        return false;
      }
    }

    index++;
  }

  return stack.length === 0;
};

// second attempt

var isValid = function (s) {
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    var chr = s[i];

    if (chr === "(" || chr === "{" || chr === "[") {
      stack.push(chr);
    } else if (chr === ")" || chr === "}" || chr === "]") {
      var top = stack.pop();
      if (
        !top ||
        (top === "(" && chr !== ")") ||
        (top === "{" && chr !== "}") ||
        (top === "[" && chr !== "]")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
