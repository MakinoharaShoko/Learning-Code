/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.s = [];
    this.minNum = undefined;
    this.minCount = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.s.push(x);
    if (this.minNum === undefined) {
        this.minNum = x;
        this.minCount = 0;
    } else {
        if (x < this.minNum) {
            this.minNum = x;
            this.minCount = 0;
        }
        if (x === this.minNum) {
            this.minCount++;
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const e = this.s.pop();
    if (e === this.minNum) {
        this.minCount--;
        if (this.minCount <= 0) {
            //重新找
            this.minNum = undefined;
            this.minCount = 0;
            const s2 = [];
            while (this.s.length > 0) {
                let e = this.s.pop();
                if (this.minNum === undefined) {
                    this.minNum = e;
                }
                else {
                    if (e < this.minNum) {
                        this.minNum = e;
                        this.minCount = 0;
                    }
                    if (e === this.minCount) {
                        this.minCount++;
                    }
                }
                s2.push(e);
            }
            while(s2.length>0){
                this.s.push(s2.pop());
            }
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.s[this.s.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minNum;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */