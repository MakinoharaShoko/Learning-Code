//var 提升，let不提升

console.log(name);//undefined
var name = 'Matt';

// console.log(age);//ReferenceError,暂时性死区
// let age = 26;

// 转换函数
console.log(typeof Number('123') );//number
console.log(typeof parseInt('123') );//number
console.log(typeof parseFloat('123') );//number
