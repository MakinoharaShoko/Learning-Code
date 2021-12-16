let myFirstPromise = new Promise(function (resolve, reject) {
	//当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
	//在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
	setTimeout(function () {
		resolve("成功!"); //代码正常执行！
	}, 250);
});

//函数返回Promise
const foo = () => {
	return new Promise((resolve, reject) => {
		console.log("OK!");
		resolve();
	})
}

//Promise.all

const p1 = new Promise((resolve, reject) => {
	const pass = () => {
		console.log("Pass P1");
		resolve();
	}
	setTimeout(pass, 1000);
});

const p2 = new Promise((resolve, reject) => {
	const pass = () => {
		console.log("Pass P2");
		resolve();
	}
	setTimeout(pass, 1000);
});

Promise.all([p1, p2]).then(() => {
	console.log("All Passed!");
});
