let obj1 = new Object();
obj1.name = 'obj1';
console.log(obj1.name);//obj1

//下面这种做法会取得相同的效果

let obj2 = {
    name:'obj2'
}

console.log(obj2.name);//obj2

//访问对象属性的另一种方式
console.log(obj2['name']);//obj2