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
    let next = null; //反转后的下一个
    let curr = head;  //当前访问的
    while(curr !==null){//当前访问的不是空
        const t = curr.next; //当前的下一个（反转前）
        curr.next = next; //改变下一个为反转后的下一个
        next = curr; //反转后的下一个是当前的（也就是下一个curr的指向）
        curr = t; //curr指向反转前的下一个
    }
    return next;
};