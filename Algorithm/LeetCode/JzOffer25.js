/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode();
    let node = head;
    while (l1 !== null || l2 !== null) {
        if (l1 && l2) {
            if (l1.val > l2.val) {
                node.next = l2;
                l2 = l2.next;
            } else {
                node.next = l1;
                l1 = l1.next;
            }
        } else {
            if (l1) {
                node.next = l1;
                l1 = l1.next;
            }
            if (l2) {
                node.next = l2;
                l2 = l2.next;
            }
        }
        node = node.next;
    }
    return head.next;
};