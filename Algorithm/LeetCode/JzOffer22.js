/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let node = head;
    const res = [];
    while (node !== null) {
        res.push(node);;
        node = node.next;
    }
    return res[res.length - k];
};