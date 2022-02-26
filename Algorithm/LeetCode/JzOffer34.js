/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    //使用dfs
    const res = [];
    const find = (node, sum, list) => {
        let newSum = sum;
        if (node)
            newSum = newSum + node.val;//加上这个节点的值
        else {
            return;
        }
        const newList = JSON.parse(JSON.stringify(list))//深拷贝当前列表
        newList.push(node.val);
        if (newSum === target && !node.left && !node.right) {
            res.push(newList);
        }
        if (node.left) {
            find(node.left, newSum, newList);
        }
        if (node.right) {
            find(node.right, newSum, newList);
        }
    }
    find(root, 0, []);
    return res;
};