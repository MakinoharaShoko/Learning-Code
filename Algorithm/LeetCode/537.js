/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    const num1real = parseInt( num1.split('+')[0]);
    const num1v = parseInt(num1.split('+')[1].replace(/i/g,''));
    const num2real = parseInt( num2.split('+')[0]);
    const num2v = parseInt(num2.split('+')[1].replace(/i/g,''));
    return `${num1real*num2real+(-1)*(num1v*num2v)}+${num1real*num2v+num2real*num1v}i`
};

console.log(complexNumberMultiply("1+-1i","1+-1i"));