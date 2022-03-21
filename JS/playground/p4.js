function c(func) {
    return function c1(...args) { //返回柯里化后的函数
        if (args.length >= func.length) { //柯里化后的函数调用时，参数够了
            return func.apply(this, args);//直接返回调用结果
        } else { //参数不够
            return function c2(...args2) { //返回一个新函数，接受剩余参数
                return c1.apply(this, args.concat(args2)); //将剩余参数和原参数合并，继续执行柯里化后的函数
            }
        }
    }
}
const add = (x, y, z) => x + y + z;

const uncadd = c(add);

console.log(uncadd(1)(2)(3));
console.log(uncadd(1, 2)(3));
console.log(uncadd(1)(2, 3));

function unCurrying(fn) {
    const tar = this;
    return function (...argu) {
        return fn.apply(tar, argu)
    }
}

const add2 = unCurrying(uncadd);

console.log(add2(1, 2, 3)); 