// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function (strs) {
  var result = [];
  var hash = {};
  var keyList = {};

  for (var i = 0; i < strs.length; i++) {
    var str = strs[i];
    var key = getKey(str);

    if (hash[key]) {
      keyList[key] = true;
    } else {
      hash[key] = [];
    }

    hash[key].push(str);
  }

  for (i in keyList) {
    result = result.concat(hash[i]);
  }

  return result;
};

var getKey = function (str) {
  var key = "";
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    var val = str.charCodeAt(i) - "a".charCodeAt(0);
    arr[val] = arr[val] || 0;
    arr[val]++;
  }

  return arr.join("_");
};
