/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    //用bfs
    let printQueue = [];
    if (root)
        printQueue.push(root);
    else return [];
    let printList = [];
    while (printQueue.length > 0) {
        let len = printQueue.length;
        for (let i = 0; i < len; i++) {
            let node = printQueue.shift();
            printList.push(node.val);
            if (node.left) {
                printQueue.push(node.left);
            }
            if (node.right) {
                printQueue.push(node.right);
            }
        }
    }
    return printList;
};