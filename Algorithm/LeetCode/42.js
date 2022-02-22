/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let s1 = 0;
    let s2 = 0;
    let sz = 0;
    let max1 = 0;
    let max2 = 0;
    height.map(e => {
        if (e > max1) {
            max1 = e;
        }
        sz += e;
        s1 += max1;
    })
    for (let i = height.length - 1; i >= 0; i--) {
        if (height[i] > max2) {
            max2 = height[i];
        }
        s2 += max2;
    }
    const s3 = max1 * height.length;
    return s1 + s2 - s3 - sz;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));