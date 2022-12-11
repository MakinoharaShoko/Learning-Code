function rotate(arr, size, index) {
    const newArr = JSON.parse(JSON.stringify(arr));
    // 上边
    for (let x = index, y = index + 1; y <= size - index - 1; y++) {
        newArr[x][y] = arr[x][y - 1];
    }
    // 右边
    for (let x = index + 1, y = size - index - 1; x <= size - index - 1; x++) {
        newArr[x][y] = arr[x - 1][y];
    }
    // 下边
    for (let x = size - index - 1, y = size - index - 2; y >= index; y--) {
        newArr[x][y] = arr[x][y + 1];
    }
    // 左边
    for (let x = size - index - 2, y = index; x >= index; x--) {
        newArr[x][y] = arr[x + 1][y];
    }
    return newArr;
}

console.log(JSON.stringify(rotate([[1,2,3],[4,5,6],[7,8,9]],3,0)))