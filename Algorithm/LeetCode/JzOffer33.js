/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    const judge = (i, j) => {
        if (i >= j)//左右区间
            return true;
        //根节点是j
        const root = postorder[j];
        let s;//s是第一个比根大的节点
        //找左子树
        for (let k = 0; k <= j; k++) {
            if (postorder[k] > root) {
                s = k;
                break;
            }
        }
        for (let k = s; k < j; k++) {//确认右子树值都大于根
            if (postorder[k] <= root) {
                return false;//若不是，返回false
            }
        }
        if(s === undefined){//没有找到右子树
            return judge(i, j - 1);
        }
        return judge(i, s - 1) && judge(s, j - 1);
    }
    return judge(0, postorder.length - 1);
};