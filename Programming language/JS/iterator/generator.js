//定义生成器

function* genetatorFn() {
    //......
}

let genetatorFn1 = function* () {
    //......
}

class Foo {
    * genetatorFn() {
        //......
    }
}

class Bar {
    static * genetatorFn() {
        //......
    }
}

//使用yield

function* genetatorFn2() {
    yield 1;
    yield 2;
    return 3;
}//在return之后，迭代器的状态变为done

let it1 = genetatorFn2();
for (e of it1) {
    console.log(e);
}//done状态的值不会被log（在数组里，done的值是undefined

//使用星号来让yield迭代可迭代对象

let it2 = (
    function* () {
        yield* [1, 2, 3];
    }
)();

for (e of it2) {
    console.log(e);
}

// 生成器取代默认迭代器
class Foo2{
    constructor(){
        this.values = [1,2,3];
    }
    *[Symbol.iterator](){
        yield* this.values;
    }
}

let foo = new Foo2();

console.log("iterator of Foo2: ");
for(e of foo){
    console.log(e);
}

// return：提前终止迭代器
function* genetatorFn3(){
    yield* [1,2,3]
}
let it3 = genetatorFn3();
console.log(it3.next());
console.log(it3.return(2));//此时迭代器状态变为done:true，值为2