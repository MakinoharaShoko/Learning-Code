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
    const length = preorder.length;//确定结点个数
    const buildTree2 = (root, left, right) => {
        if (left > right)//遍历结束的条件
            return null;
        //根节点
        const newNode = new TreeNode(preorder[root]);
        //找到在中序中的位置
        const i = inorder.indexOf(newNode.val);
        //遍历左子树
        //root + 1:因为左子树根是前序遍历根的下一个，从最左遍历到根左
        newNode.left = buildTree2(root + 1, left, i - 1);
        //遍历右子树
        //右子树根是i - left + root + 1，从根右遍历到最右
        newNode.right = buildTree2(i - left + root + 1, i + 1, right);
        return newNode;//返回根节点
    }

    const root = buildTree2(0, 0, length - 1);//根是前序遍历第一个，从最左到最右，生成整个树
    return root;
};