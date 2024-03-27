let date1 = new Date();

console.log(date1.getDate());//22

console.log(date1.toDateString());//Wed Dec 22 2021
console.log(date1.toLocaleDateString());//2021/12/22
console.log(date1.toTimeString());//21:04:17 GMT+0800 (中国标准时间)

let date2 = new Date('2021/1/1');
console.log(date2.toDateString());//Fri Jan 01 2021