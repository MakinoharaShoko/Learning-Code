function MyNum(n){
    this.number = n;
}

MyNum.prototype.valueOf = function(){
    console.log(this.number);
    return this.number;
}

const n1 = new MyNum(1);
const n2 = new MyNum(2);

console.log(n1<n2);