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
    let cur = null;
    let pre = head;
    while(pre !==null){
        const t = pre.next;
        pre.next = cur;
        cur = pre;
        pre = t;
    }
    return cur;
};