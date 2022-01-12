/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
function hasCycle(head) {
    if(head){
        while (head.next !== null) {
            if (head.val === 100001) {
                return true;
            }
            head.val = 100001;
            head = head.next;
        }
    }
    return false;
}
module.exports = {
    hasCycle: hasCycle
};