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
var reverseList = function (head) {
    if (head === null || head.next === null) { //没有后继
        return head;
    }
    const ret = reverseList(head.next); //反转后的头
    head.next.next = head;
    head.next = null;
    return ret;
};