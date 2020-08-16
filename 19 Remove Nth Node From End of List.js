// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var n1 = new ListNode();
  var n2 = new ListNode();
  var dummy = n2;

  n1.next = head;
  n2.next = head;

  while (n > 0 && n1) {
    n1 = n1.next;
    n--;
  }

  if (n > 0) {
    return head;
  }

  while (n1 && n1.next) {
    n1 = n1.next;
    n2 = n2.next;
  }

  n2.next = n2.next.next;

  return dummy.next;
};
