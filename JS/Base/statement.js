const obj = {
    a:'123',
    b:'114514'
}

//for in 遍历一个对象
for (const objKey in obj) {
    console.log(objKey)
    console.log(obj[objKey]);
}
//key是属性名

// for of 遍历一个可迭代对象

const array1 = [1,2,3,4,5,6];
for (const number of array1) {
    console.log(number);
}