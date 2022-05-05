/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let s1 = 0; // 从左侧开始数，累加当前最高值
    let s2 = 0; // 从右侧开始数，累加当前最高值
    let sz = 0; // 柱子总面积
    let max1 = 0; // 左侧开始的最大值
    let max2 = 0; // 右侧开始的最大值
    height.map(e => {
        if (e > max1) {
            max1 = e;
        }
        sz += e; // 累加柱子面积
        s1 += max1; // 累加左面开始的面积
    })
    for (let i = height.length - 1; i >= 0; i--) {
        if (height[i] > max2) {
            max2 = height[i];
        }
        s2 += max2; // 累加右面开始的面积
    }
    const s3 = max1 * height.length; // 计算总面积
    return s1 + s2 - s3 - sz;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));