/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    /**
     * 判断两棵树是否相同
     * @param {TreeNode} root1 
     * @param {TreeNode} root2 
     * @return {boolean}
     */
    const judge = (root1, root2) => {
        if (root2 === null) {//root2先空，代表找完了
            return true;
        }
        if (root1 === null) {
            return false;
        }
        if (root1.val !== root2.val)
            return false;
        else {
            return judge(root1.left, root2.left) && judge(root1.right, root2.right);
        }
    }
    /**
     * 寻找子结构
     * @param {TreeNode} root1 
     * @param {TreeNode} root2 
     * @return {boolean}
     */
    const findNode = (root1, root2) => {
        //根A或B有一个是空，那么找不到子结构
        if (root2 === null ||root1 === null) {
            return false;
        }
        if (judge(root1, root2))//判断当前是不是子结构
            return true;
        else//继续找
            return findNode(root1.right, root2) || findNode(root1.left, root2);
    }
    return findNode(A, B);
};