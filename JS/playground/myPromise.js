class MyPromise {
    constructor(func) {
        this.status = 'PENDING'; // 初始化状态
        this.value = undefined; // 成功返回的值
        this.reason = undefined; //失败返回的值

        this.callbacks = [];//结束后的回调
        func(this.resolve.bind(this), this.reject.bind(this));//绑定this
    }

    resolve(value) {
        this.value = value;
        this.status = 'FULFILLED'; // 设置状态

        // 通知事件执行
        this.callbacks.forEach((cb) => this._handler(cb));
    }

    reject(reason) {
        this.reason = reason;
        this.status = 'REJECTED'; // 设置状态

        // 通知事件执行
        this.callbacks.forEach((cb) => this._handler(cb));
    }

    then(onFulfilled, onRejected) { //这个函数用于注册
        // 将需要执行的回调函数存储起来
        this.callbacks.push({
            onFulfilled,
            onRejected,
        });//保存参数
    }

    //用于执行回调函数
    _handler(callback) {
        const { onFulfilled, onRejected } = callback;//回调函数的两个参数

        if (this.status === 'FULFILLED' && onFulfilled) {
            // 传入存储的值
            onFulfilled(this.value);
        }

        if (this.status === 'REJECTED' && onRejected) {
            // 传入存储的错误信息
            onRejected(this.reason);
        }
    }
}

function test(success) {
    return new MyPromise((res, rej) => {
        setTimeout(() => {
            if (success) {
                res("willem");
            } else {
                rej('error');
            }
        }, 0);
    })
}

test(true).then((r, j) => {
    console.log(r);
})

test(false).then(null, j => {
    console.log(j);
})