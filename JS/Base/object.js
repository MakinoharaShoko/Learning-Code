// Object

//是否有某属性
const obj1 = {name:'obj1'};
console.log(obj1.hasOwnProperty('name'));//true
console.log(obj1.hasOwnProperty('id'));//false

console.log(obj1.toLocaleString());//[object Object]
console.log(obj1.toString());//[object Object]
console.log(obj1.valueOf());//{name:'obj1'}


//重写 toString
function Dog(name) {
	this.name = name;
}

const dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
	return `${this.name}`;
};

console.log(dog1.toString());//Gabby
