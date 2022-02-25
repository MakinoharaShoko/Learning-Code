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
    if (!root)
        return [];
    const printList = [];
    //从root开始打印
    const printQueue = [];
    printQueue.push(root);
    while (printQueue.length > 0) {
        const tmp = [];
        let len = printQueue.length;
        for (i = 0; i < len; i++) {
            const node = printQueue.shift();
            tmp.push(node.val);
            if (node.left)
                printQueue.push(node.left);
            if (node.right)
                printQueue.push(node.right);
        }
        if (printList.length % 2 !== 0)
            tmp.reverse()
        printList.push(tmp);
    }
    return printList;
};