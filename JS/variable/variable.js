let a = 3;//原始值
let b = a;//此处的b是复制值

let obj1 = {};
obj1.name = '114514';
let obj2 = obj1;//此处的obj2是引用值
obj2.name = 'no 114514!';
console.log(obj1.name);//输出：“no 114514!”此时obj1.name被改变了。

// 作用域

let c = 0;//全局作用域
const getc = () => {
    let c = 1;//在getc的作用域内，访问不到外层的c
    if (c === 1) {
        let c = 2;//在if语句的块级作用域内，访问不到外层的c
    }
}

