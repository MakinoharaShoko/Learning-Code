/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const printList = [];
    const printQueue = [];
    if (root) {
        printQueue.push(root);
    }
    while (printQueue.length > 0) {
        const tmp = [];
        for (let i = printQueue.length; i > 0; i--) {
            const node = printQueue.shift();
            tmp.push(node.val);
            node.left && printQueue.push(node.left);
            node.right && printQueue.push(node.right);
        }
        printList.push(tmp);
    }
    return printList;
};