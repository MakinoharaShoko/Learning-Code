/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    //bfs遍历
    const printQueue = [];
    const printList = [];
    if (root) {
        printQueue.push(root);
        printList.push(root.val);
    }
    while (printQueue.length > 0) {
        const len = printQueue.length;
        for (let i = 0; i < len; i++) {
            const node = printQueue.shift();
            if (node.left) {
                printQueue.push(node.left);
                printList.push(node.left.val);
            } else
                printList.push(null);
            if (node.right) {
                printQueue.push(node.right);
                printList.push(node.right.val);
            } else
                printList.push(null);
        }
    }
    let str = '';
    //过滤无关null
    for (let i = printList.length - 1; i >= 0; i--) {
        if (printList[i] === null) {
            printList[i] = 'drop';
        }
        else {
            break;
        }
    }
    for (e of printList) {
        if (e === 'drop') {
            continue;
        }
        if (e === null) {
            str = str + 'null,'
        }
        else {
            str = str + `${e},`;
        }
    }
    str = str.substring(0, str.length - 1);
    return `[${str}]`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data === '[]') {
        return null;
    }
    //先把字符串处理为数组
    data = data.substring(1, data.length - 1);
    let sList = data.split(',');
    sList = sList.map(
        e => {
            if (e === 'null') {
                return null;
            } else {
                return parseInt(e);
            }
        }
    )
    //开始重建
    const queue = [];
    let index = 0;
    if (sList === []) {
        return null;
    }
    const root = new TreeNode(sList[index]);
    index++;
    queue.push(root);
    while (index < sList.length) {
        for (let i = queue.length; i > 0; i--) {
            const node = queue.shift();
            if (sList[index] !== null && index < sList.length) { //防止数组错误地越界，产生错误的节点  
                node.left = new TreeNode(parseInt(sList[index]));
                queue.push(node.left);
            }
            index++;
            if (sList[index] !== null && index < sList.length) {
                node.right = new TreeNode(parseInt(sList[index]));
                queue.push(node.right);
            }
            index++;
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */