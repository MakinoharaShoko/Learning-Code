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
var reverseList = function (head) {//找反转后的头
    if (head === null || head.next === null) { //没有后继，证明这是反转后的头
        return head;
    }
    const ret = reverseList(head.next); //递归找反转后的头
    //此时当前的ret就是反转后的头
    head.next.next = head;//回溯阶段：把每一个节点的下一个的下一个都改为自己
    head.next = null;//回溯阶段：把自己的下一个改成null
    return ret;//回溯结束，返回反转后的当前节点
};