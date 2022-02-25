/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const st = [];
    let i = 0;
    for (const e of pushed) {
        st.push(e);
        while (st[st.length - 1] === popped[i]) {
            st.pop();
            i++;
            if (st.length === 0)
                break;
        }
    }
    return st.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))