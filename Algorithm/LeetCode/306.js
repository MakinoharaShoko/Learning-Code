/**
 * @param {string} num
 * @return {boolean}
 */
 var isAdditiveNumber = function (num) {
    const p1 = 0, p2 = 1, l1 = 1, l2 = 1;
    const search = (p1, l1, p2, l2) => {
        let n1 = -1, n2 = -1;
        if (p1 + l1 <= num.length - l2) {
            n1 = parseInt(num.slice(p1, p1 + l1));
        }
        if (p2 + l2 <= num.length) {
            n2 = parseInt(num.slice(p2, p2 + l2));
        }
        if (n1 === -1 || n2 === -1) {
            return false;
        }
        //判断前导0
        if (l1 > 1) {
            if (parseInt(num.slice(p1, p1 + 1)) === 0)
                return false;
        }
        if (l2 > 1) {
            if (parseInt(num.slice(p2, p2 + 1)) === 0)
                return false
        }
        let n3 = n1 + n2;
        let p3, l3;
        for (l3 = 0; ; l3++) {
            p3 = p2 + l2;
            if (p3 + l3 > num.length) {
                p3 = -1; l3 = -1;
                break;
            } else if (parseInt(num.slice(p3, p3 + l3)) === n3) {
                break;
            }
        }
        if (p3 + l3 === num.length && (l3 === 1 || (l3 > 1 && parseInt(num.slice(p3, p3 + 1)) !== 0))) {
            return true;
        } else {
            if (p3 === -1 || l3 === -1) {
                return search(p1, l1 + 1, p2 + 1, l2) || search(p1, l1, p2, l2 + 1);
            } else {
                if (search(p2, l2, p3, l3)) {
                    return true;
                } else
                    return search(p1, l1 + 1, p2 + 1, l2) || search(p1, l1, p2, l2 + 1);
            }
        }

    }
    return search(p1, l1, p2, l2);
};