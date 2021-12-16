function func1(){
	return 1;
}

let func2 = function(){
	return 1;
}

let func3 = () => {
	return 1;
}

//立即执行的函数
(()=>1)();

//lambda

(param1, param2,paramN) => { statements }
(param1, param2,paramN) => expression;
//相当于：(param1, param2, …, paramN) =>{ return expression; }

// 当只有一个参数时，圆括号是可选的：
(singleParam) => { statements }
singleParam => { statements }

// 没有参数的函数应该写成一对圆括号。
() => { statements }