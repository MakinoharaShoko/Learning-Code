/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    //bfs
    const ret = [];
    let q = [root];
    while (q.length > 0) {
        //遍历并加入新的待遍历项目
        const len = q.length;
        const curr = [];
        for (let i = 0; i < len; i++) {
            const node = q.shift();
            curr.push(node.val);
            q.push(...node.children);
        }
        ret.push(curr);
    }
    return ret;
};