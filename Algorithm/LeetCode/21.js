/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    //每次选择小的加入
    let head = new ListNode(0, null);
    curr = head;
    while (list1 !== null || list2 !== null) {//两个链表没有遍历到尾部
        if (list1 && list2) {
            if (list1.val > list2.val) {
                head.next = list2;
                list2 = list2.next;
            } else {
                head.next = list1;
                list1 = list1.next;
            }
        } else if (list1 && !list2) {
            head.next = list1;
            list1 = list1.next;
        } else if (list2 && !list1) {
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }
    return curr.next;
};