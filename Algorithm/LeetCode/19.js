/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    //记录第n个节点
    let nodeList = [];
    let cur = head;
    while (cur !== null) {
        nodeList.push(cur);
        cur = cur.next;
    }
    //删除倒数第n个
    if (n === 1) {//删除尾部
        if (nodeList.length >= 2)
            nodeList[nodeList.length - 2].next = null;
        else
            head = null;
    } else if (n === nodeList.length) {//删除首部
        head = head.next;
    } else {//删除其他
        const i = nodeList.length - n;
        nodeList[i - 1].next = nodeList[i + 1];
    }
    return head;
};