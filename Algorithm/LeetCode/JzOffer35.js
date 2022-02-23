/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (head === null)
        return null;
    const m = new Map();
    let cur = head;
    //遍历，取得每个节点的值
    while (cur !== null) {
        m.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    while (cur !== null) {
        m.get(cur).next = m.get(cur.next) === undefined ? null : m.get(cur.next);
        m.get(cur).random = m.get(cur.random);
        cur = cur.next;
    }
    return m.get(head);
};