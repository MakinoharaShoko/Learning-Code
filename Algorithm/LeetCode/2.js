/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = null;
    let back = null;
    let up = 0;
    while (l1 || l2) {
        up += l1 ? l1.val : 0;
        up += l2 ? l2.val : 0;
        if (!head) {
            head = back = new ListNode(up % 10);
        }
        else {
            back.next = new ListNode(up % 10);
            back = back.next;
        }
        up = Math.floor(up / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
        if (up !== 0) {
            back.next = new ListNode(up);
        }
    }
    return head;
};