/**
 * @param {string} queryIP
 * @return {string}
 */
 var validIPAddress = function (queryIP) {
    // 先判断是v4还是v6
    const isV4 = queryIP.match(/\./);
    if (isV4) {
        const arr = queryIP.split('.');
        let isCorrect = true;
        if (arr.length !== 4) {
            isCorrect = false;
        }
        arr.forEach(e => {
            // 判断是否是数字
            if (isNaN(parseInt(e, 10))) {
                isCorrect = false;
            }
            // 判断是否包含前导0
            if (e.length !== parseInt(e, 10).toString().length) {
                isCorrect = false;
            }
            // 判断是否在0-255
            if (parseInt(e, 10) > 255 || parseInt(e, 10) < 0) {
                isCorrect = false;
            }
        })
        if (isCorrect) {
            return 'IPv4'
        } else return 'Neither';
    }
    if (!isV4) {
        const arr = queryIP.split(':');
        let isCorrect = true;
        if (arr.length !== 8) {
            isCorrect = false;
        }
        arr.forEach(e => {
            if (isNaN(parseInt(e, 16))) {
                isCorrect = false;
            }
            if(e.length>4){
                isCorrect = false;
            }
            const arr2 = e.split('');
            arr2.forEach(e2=>{
                if (isNaN(parseInt(e2, 16))) {
                    isCorrect = false;
                }
            })
        })
        if (isCorrect) {
            return 'IPv6'
        } else return 'Neither';
    }
};

console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"));