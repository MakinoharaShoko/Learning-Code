const arr = [[5, 10], [15, 20], [25, 30], [8, 15]];

function merge(arr) {
    arr = arr.sort((a, b) => a[0] - b[0]);
    const retArr = [];
    const newarr = arr.reduce((prev, curr) => {
        if (prev.length === 0) {
            return curr;
        } else {
            if (curr[0] > prev[1]) {
                retArr.push(prev);
                return curr;
            }
            if (curr[0] <= prev[1]) {
                if (curr[1] <= prev[1]) {
                    return prev;
                } else {
                    return [prev[0], curr[1]]
                }
            }
        }
    }, []);
    retArr.push(newarr);
    return retArr;
}

merge(arr);