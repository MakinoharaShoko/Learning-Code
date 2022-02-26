/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    //处理特殊情况
    if (!root)
        return null;
    //中序遍历
    let head;//头结点
    let pre = null;//当前节点的前一个节点
    const find = (node) => {
        if (!node) {//节点为空，就直接返回
            return;
        }
        if (node.left) {//中序遍历，先遍历左节点
            find(node.left);
        }
        if (pre === null) {//找到最左节点，设置为头节点
            head = node;
        } else {//不是最左节点，那之前访问的节点的右侧肯定是这个节点
            pre.right = node;
        }
        node.left = pre;//左边节点一定是前一个访问的节点
        pre = node;//将当前节点设置为前序节点
        if (node.right) {//继续访问右边的子树
            find(node.right);
        }
    }
    find(root);
    head.left = pre;//最终处理：头结点的左边是最后一个访问的节点
    pre.right = head;//最后一个访问的节点的左边一定是头结点
    return head;
};