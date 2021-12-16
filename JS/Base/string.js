//模板字面量

const str1 = `Hello`;

// 插值
const s1 = 'Hello';
const s2 = 114514;
const s3 = `${s1}, I will ${s2} you!`
console.log(s3);//Hello, I will 114514 you!

//原始字符串

console.log(String.raw`\u00a9`); //\u00a9
console.log(`\u00a9`); //©