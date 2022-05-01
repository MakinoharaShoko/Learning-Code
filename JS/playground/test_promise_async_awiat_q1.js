// 请判断下列代码的执行顺序
console.log("start");

// 因为setImmediate只在node环境中可用，所以这里用setTimeout（0）代替
setTimeout(function () {
    console.log("setImmediate");
}, 0);

setTimeout(function () {
    console.log("timeout1");
    new Promise(function (resolve) {
        resolve();
        console.log("timeout1_promise");
    }).then(function () {
        console.log("timeout1_then");
    });
}, 2000);

for (var i = 1; i < 6; i++) {
    setTimeout(function () {
        console.log("loop" + i);
    }, i * 1000);
    console.log(i);
}

function xhr() {
    // 用async模拟XHR
    console.log("xhr");
    return "async";
}

async function asyncFn() {
    // 用async模拟
    const tag = await xhr();
    return tag;
}

asyncFn().then(arg => console.log(arg));

new Promise(function (resolve) {
    console.log("promise1");
    reject();
}).catch(function () {
    console.log("catch1");
});

setTimeout(function () {
    console.log("timeout2");
    new Promise(function (resolve) {
        console.log("timeout2_promise");
        resolve();
    }).then(function () {
        console.log("timeout2_then");
    });
}, 1000);