/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let fenceWidth = 1;//间隔宽度
    //数字的长度 = fenceWidth*10**fenceWidth;
    while (fenceWidth * 10 ** fenceWidth < n) {
        n = n + 10 ** fenceWidth;//由于添加数位，n被移动了 10**fenceWidth 位
        fenceWidth++;
    }
    //找指定位置的那个间隔的数字
    const num = Math.floor(n / fenceWidth).toString();//n / fenceWidth 代表指定数字
    //因为每个数字都被补到了fenceWidth 位，所以数字本身当然是 n / fenceWidth
    return num[n % fenceWidth];//找出n落在那个数字的第几位，能整除代表在第0位
};

console.log(findNthDigit(1000000000));