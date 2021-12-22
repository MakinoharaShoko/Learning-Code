let arr1 = new Array();//创建一个数组
let arr2 = new Array(20);//创建一个空间为20的数组
let arr3 = new Array('a', 'b', 'c')//创建数组时赋值
let arr4 = [1, 2, 3]//字面量创建

arr4.push(4);//栈方法
arr4.pop();//弹出

arr4.unshift(0);//队列方法
arr4.shift();//移除第一项

let arr5 = [1, 2, 5, 3, 4, 7, 3, 4];
arr5.sort();//排序
console.log(arr5);

const compare = (a, b) => {
    switch (true) {
        case a > b:
            return -1;
        case a < b:
            return 1;
        default:
            return 0;
    }
}

arr5.sort(compare);//按指定的方法排序
console.log(arr5);

let arr6 = arr3.concat(arr4);
console.log(arr6);//连接数组
let arr7 = arr6.slice(0,3);//取数组索引为0-3的元素，不改变原数组
console.log(arr6);
console.log(arr7);
arr6.splice(0,3);//从0开始，删除3个元素，会改变原数组
console.log(arr6);
arr6.splice(0,0,-2,-1,0);//在0处插入
console.log(arr6);
arr6.splice(0,3,-3,-2,-1,0);//删除从0开始的3个元素，然后插入元素
console.log(arr6);

//数组搜索

let arr8 = [0,1,-1,0,0,-1,0];
let index1 = arr8.indexOf(-1);//从前搜索
let index2 = arr8.lastIndexOf(-1)//从后搜索
console.log(arr8);
console.log(`indexOf: ${index1}, lastIndexOf: ${index2}`);