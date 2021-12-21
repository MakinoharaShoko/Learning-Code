let a = 3;//原始值
let b = a;//此处的b是复制值

let obj1 = {};
obj1.name='114514';
let obj2 = obj1;//此处的obj2是引用值
obj2.name='no 114514!';
console.log(obj1.name);//输出：“no 114514!”此时obj1.name被改变了。