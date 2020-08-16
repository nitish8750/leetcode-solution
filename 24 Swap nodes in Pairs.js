// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.
// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var n1 = dummy;
    var n2 = head;
    
    while(n2 !== null && n2.next !== null){
        var nextStart = n2.next.next;
        
        n1.next = n2.next;
        n1.next.next = n2;
        n2.next = nextStart;
        
        n1 = n2;
        n2 = n2.next;
    }
    
    return dummy.next;
};