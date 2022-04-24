var a = 2;
const b = {
    a: 3,
    f: function () {
        console.log(this.a);
    }
}
console.log(b.a);

b.f();