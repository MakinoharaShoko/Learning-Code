/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const length = preorder.length;
    const buildTree = (root, left, right) => {
        if (left > right)
            return;
        //根节点
        const newNode = new TreeNode(preorder[root]);
        //找到在中序中的位置
        const i = inorder.indexOf(newNode.val);
        //遍历左子树
        const left = buildTree(root + 1, left, i - 1);
        const right = buildTree(i - left + root + 1, i + 1, right);
        return newNode;
    }
};