//一元运算符
let str1 = '123';
str1 = +str1;
console.log(typeof str1);//number

//bool operator

// ❑ 如果操作数是对象，则返回false。
// ❑ 如果操作数是空字符串，则返回true。
// ❑ 如果操作数是非空字符串，则返回false。
// ❑ 如果操作数是数值0，则返回true。
// ❑ 如果操作数是非0数值（包括Infinity），则返回false。
// ❑ 如果操作数是null，则返回true。
// ❑ 如果操作数是NaN，则返回true。
// ❑ 如果操作数是undefined，则返回true。

//operator
console.log(2*3);//6
console.log(31%4);//3
console.log(1/3);//0.3333333333333333

//pow

console.log(Math.pow(2,3));///8
console.log(2**3);//8

//转换

console.log(5-'2');//3
console.log('5'-2);//3
console.log(5-true);//4
console.log(5-null);//5
console.log(NaN-1);//NaN

//比较

//字典序
console.log("alpha"<'beta');//true
console.log('3'>'23');//true，因为按照字典序

//发生类型转换
console.log('23'<3);//false
console.log(23>'3');//true

//与NaN的比较总为false
console.log(NaN>0);//false
console.log(NaN<0);//false


//相等
console.log('55'==55);//true
console.log('55'===55);//false

//三元表达式
num1 = 3;
num2 = 4;
let max = (num1>num2)?num1:num2;

console.log(max);//4