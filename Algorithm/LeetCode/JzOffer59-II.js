var MaxQueue = function () {
    this.q = [];
    this.mq = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (this.mq.length > 0) {
        return this.mq[0];
    } else return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    while (this.mq[this.mq.length - 1] < value) {
        this.mq.pop();
    }
    this.mq.push(value);
    this.q.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    const f = this.q.shift();
    if (!f) return -1;
    if (f === this.mq[0]) {
        this.mq.shift();
    }
    return f;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */