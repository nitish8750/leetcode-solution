// Given an array of linked-lists lists, each linked list is sorted in ascending order.

// Merge all the linked-lists into one sort linked-list and return it.
// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length won't exceed 10^4.

// Hide Company Tags LinkedIn Google Uber Airbnb Facebook Twitter Amazon Microsoft
// Hide Tags Divide and Conquer Linked List Heap
// Hide Similar Problems (E) Merge Two Sorted Lists (M) Ugly Number II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function merge(beg, end, lists) {
    if (beg > end) {
      return [];
    }

    if (beg === end) {
      return lists[beg];
    }

    var mid = beg + Math.floor((end - beg) / 2);
    var left = merge(beg, mid, lists);
    var right = merge(mid + 1, end, lists);

    return mergeTwoLists(left, right);
  }

  function mergeTwoLists(list1, list2) {
    var head = new ListNode(0);
    var tmp = head;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        tmp.next = list1;
        list1 = list1.next;
      } else {
        tmp.next = list2;
        list2 = list2.next;
      }

      tmp = tmp.next;
    }

    if (list1) {
      tmp.next = list1;
    } else if (list2) {
      tmp.next = list2;
    }

    tmp = head.next;
    head.next = null;

    return tmp;
  }

  return merge(0, lists.length - 1, lists);
};
