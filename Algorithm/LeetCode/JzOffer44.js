    /**
     * @param {number} n
     * @return {number}
     */
    var findNthDigit = function (n) {
        let currentLength = 0;
        let currentString = '';
        let addLen = 0;
        for (let i = 0; ; i++) {
            //当前长度不够，延长长度
            if (currentLength <= n) {
                currentLength = currentLength + i.toString().length;
                currentString = i.toString();
                addLen = i.toString().length;
            } else {
                const index = n + addLen - currentLength
                return currentString[index];
            }
        }
    };

console.log(findNthDigit(1000000000));