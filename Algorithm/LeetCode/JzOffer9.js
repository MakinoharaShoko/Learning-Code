var CQueue = function () {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.s1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    //s2为空时倾倒s1到s2
    if (this.s2.length === 0 && this.s1.length === 0)
        return -1;
    if (this.s2.length === 0)
        while (this.s1.length !== 0) {
            this.s2.push(this.s1.pop());
        }
    return this.s2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */