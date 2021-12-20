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

//with 语句

let location = {
    country:'China',
    province:'Anhui',
    city:'He-fei'
}

with (location) {
    console.log(country);
    console.log(province);
    console.log(city);
}

// switch

const a = 0;

switch (true){
    case a<0:
        console.log('a<0');
        break;
    case a>=0:
        console.log('a>=0');
        break;
}//输出 a>=0