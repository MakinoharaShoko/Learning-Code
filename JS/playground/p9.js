function MyArray() {

}

MyArray.prototype = new Array();

MyArray.prototype.valueOf = function () {
    return this.reduce((a, c) => a + c, 0);
}

a1 = new MyArray();
a2 = new MyArray();
a1.push(1);
a1.push(2);
a2.push(3);
a2.push(4);

console.log(a1 > a2);