//创建迭代器
let arr = [1,2,3];
let iter = arr[Symbol.iterator]();

//执行
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());//done：true代表目前已经完成迭代。

//for-of循环可作用于一个可迭代对象

for (const e of arr) {
    console.log(e);
}