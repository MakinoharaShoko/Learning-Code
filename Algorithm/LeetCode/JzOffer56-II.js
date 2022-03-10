/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const m = new Map();
    for(const e of nums){
        if(m.has(e)){
            m.set(e,m.get(e)+1);
        }else{
            m.set(e,1);
        }
    }
    const keys = m.keys();
    for(const e of keys){
        if(m.get(e) === 1){
            return e;
        }
    }
};