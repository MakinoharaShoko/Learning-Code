/**
 * 请实现一个函数，将一个没有层级的扁平对象，转换为树形结构
 * @param {array} tableData 由对象构成的数组，对象结果为扁平化
 * @param {array} keys 由字符串构成的数组，字符串为 tableData 对象的 key，最终
 * 输出的对象层级顺序为 keys 中字符串的顺序
 * @return {array} 保存具有树形结构的对象
 */

// 输入数据：
const origin = [{
    p: "浙江",
    c: "杭州",
    d: "西湖"
}, {
    p: "四川",
    c: "成都",
    d: "锦里"
}, {
    p: "四川",
    c: "成都",
    d: "方所"
}, {
    p: "四川",
    c: "阿坝",
    d: "九寨沟"
}];

transObject(origin, ['p', 'c', 'd']);

// 输出数据：
// [
//   {
//     value: "浙江",
//     children: [{
//       value: "杭州",
//       children: [{ value: "西湖" }]
//     }]
//   }, {
//     value: "四川",
//     children: [
//       {
//         value: "成都",
//         children: [{ value: "锦里" }, { value: "方所" }]
//       }, 
//       {
//         value: "阿坝",
//         children: [{ value: "九寨沟" }]
//       }
//     ]
//   }
// ];

function transObject(tableData, keys) {
    const returnArr = [];
    const map = new Map();
    for (const unit of tableData) {
        for (let i = 0; i < keys.length; i++) {
            // 处理顶层
            const key = keys[i];
            if (i === 0) {
                const isHasThisKey = map.has(unit[key]);
                if (!isHasThisKey) {
                    const obj = {
                        value: unit[key]
                    }
                    returnArr.push(obj)
                    map.set(unit[key], obj);
                }
            } else {
                // 找到父对象，也就是key的前序value对应的对象
                const fatherObj = map.get(unit[keys[i - 1]]);
                // 创建 children 数组
                if (!fatherObj.children) {
                    const obj = {
                        value: unit[key]
                    }
                    fatherObj.children = [obj];
                    map.set(unit[key], obj);
                } else { // 往children 数组中插入新值

                    // 检查是否有重复
                    const isHasThisValue = fatherObj.children.findIndex(e => e.value === unit[key]) >= 0;
                    if (!isHasThisValue) {
                        const obj = {
                            value: unit[key]
                        }
                        fatherObj.children.push(obj);
                        map.set(unit[key], obj);
                    }
                }
            }
        }
    }
    return returnArr;
}