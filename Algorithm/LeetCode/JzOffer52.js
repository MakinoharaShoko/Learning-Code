/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const m = new Map();
    while(headA){
        m.set(headA,'');
        headA = headA.next;
    }
    while(headB){
        if(m.has(headB)){
            return headB;
        }
        headB = headB.next;
    }
    return null;
};