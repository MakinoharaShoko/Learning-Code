/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    const ret = [];
    try {
        head.val;
    } catch (error) {
        return [];
    }
    while (true) {
        ret.push(head.val);
        if (head.next === null) {
            break;
        }
        head = head.next;
    }
    return ret.reverse();
};