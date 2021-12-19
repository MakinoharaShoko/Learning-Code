//正则表达式规则参见：
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions



//创建
const re = /ab+c/;
const re2 = new RegExp('ab+c');//另一种创建方式

//exec匹配
const re3 = /fo*/;
console.log(re3.exec('football,football match'));//一个数组，返回匹配结果

//测试是否匹配
console.log(re3.test('football,football match'));//true

//字符串match匹配
console.log(('football,football match').match(re3));//一个数组，返回匹配结果
const re4 = /fo*/g;//使用matchAll需要正则表达式有g标签
const matchIterator = ('football,football match').matchAll(re4);//一个迭代器，返回匹配结果
for (const match of matchIterator) {
    console.log(match);//分别返回两次匹配的结果
}
// 相关标签：
// g	全局搜索。
// i	不区分大小写搜索。
// m	多行搜索。
// s	允许 . 匹配换行符。
// u	使用unicode码的模式进行匹配。
// y	执行“粘性(sticky)”搜索,匹配从目标字符串的当前位置开始。

const re5 = /fo*/g;
console.log('exec re5:')
let result
//输出几个数组，每个数组代表一个匹配结果
while ((result = re5.exec('football,football match')) !== null) {
    console.log(result)
}

//几个在string中使用正则表达式的例子：

//返回匹配的第一个index
console.log('a football'.search(/fo*/));//2

//replace
console.log('dog'.replace('dog','monkey'))//monkey
console.log('dooog'.replace(/do*g/,'monkey'))//monkey
//特殊变量名
// $$	插入一个 "$"。
// $&	插入匹配的子串。
// $`	插入当前匹配的子串左边的内容。
// $'	插入当前匹配的子串右边的内容。
// $n
// 假如第一个参数是 RegExp对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从1开始。如果不存在第 n个分组，那么将会把匹配到到内容替换为字面量。比如不存在第3个分组，就会用“$3”替换匹配到的内容。
//\

// $<Name>	 这里Name 是一个分组名称。如果在正则表达式中并不存在分组（或者没有匹配），这个变量将被处理为空字符串。只有在支持命名分组捕获的浏览器中才能使用。

const re6 = /(\w+)\s(\w+)/;
let str = "John Smith";
const newStr = str.replace(re, "$2, $1");
// Smith, John
console.log(newStr);

console.log('dooog,dooooooog'.replace(/(do*g),(do*g)/,'$2,$1'))//dooooooog,dooog

//分割字符串
console.log('abc,abcd,abcde,abcdefg'.split(','));//分割后没有逗号（,）