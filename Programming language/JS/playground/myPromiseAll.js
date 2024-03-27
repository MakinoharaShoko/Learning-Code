MyAll = function (iterator) {  
    let count = 0//用于计数，当等于len时就resolve
    let len = iterator.length
    let res = []//用于存放结果
    return new Promise((resolve,reject) => {
        for(let e of iterator){
            //Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。
            //如果这个值是一个 promise ，那么将返回这个 promise。
            Promise.resolve(e)//转化为Promise对象
            .then((data) => {
                res[count] = data;
                if(++count === len){
                    resolve(res)
                }
            })
            .catch(e => {
                reject(e)
            })
        }
    })
}