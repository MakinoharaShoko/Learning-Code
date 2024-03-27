const func1 = (a)=>{
    console.log(`hello,${a}`);
}
//apply接受一个参数数组
func1.apply(null,['Mahiru'])
//如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。