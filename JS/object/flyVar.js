class flyVar {
    flyStorage = {};
    flyEffect = [];
    flySingle = {};
    set(k, v) {
        this.flyStorage[k] = v;
        this.runAll();
        this.runSingle(k);
    }
    effect(callback) {
        if (typeof callback === 'function')
            this.flyEffect.push(callback)
    }
    get(k) {
        if (this.flyStorage.hasOwnProperty(k))
            return this.flyStorage[k];
    }
    connect(k, callback) {
        this.flySingle[k] = new Object();
        this.flySingle[k].callback = callback;
    }
    runAll() {
        //run global
        for (const callback of this.flyEffect) {
            callback();
        }
    }
    runSingle(k) {
        //run connected function
        if (this.hasOwnProperty(k) &&
            this.flySingle[k].hasOwnProperty('callback') &&
            typeof this.flySingle[k]['callback'] === 'function')
            this.flySingle[k].callback();
    }
}

module.exports = flyVar;