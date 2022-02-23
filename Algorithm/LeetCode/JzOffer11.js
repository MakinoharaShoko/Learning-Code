/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    //没有旋转
    if(numbers[0]<numbers[numbers.length-1]){
        return numbers[0];
    }
    //从后往前找
    let min = numbers[numbers.length - 1];
    for (i = numbers.length - 2; i >= 0; i--) {
        if(numbers[i]>min){
            return min;
        }
        if(numbers[i]<min){
            min = numbers[i];
        }
    }
    return min;
};