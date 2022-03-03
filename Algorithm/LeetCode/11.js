/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    //从两边到中间
    let l = 0; r = height.length - 1;
    let max = 0;
    while (l !== r) {
        let water = (r - l) * Math.min(height[r], height[l]);
        if (water > max) {
            max = water;
        }
        //移动短板
        if (height[r] > height[l]) {
            l++;
        } else {
            r--;
        }
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));