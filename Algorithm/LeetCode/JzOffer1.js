/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let node = head;
    let pre = null;
    while(node!==null){
        if(node.val === val){
            //检查是否是第一个
            if(pre === null){
                head = node.next;
                return head;
            }
            if(node.next === null){
                pre.next = null;
                return head;
            }
            pre.next = node.next;
            return head;
        }
        pre = node;
        node = node.next;
    }
    return head;
};