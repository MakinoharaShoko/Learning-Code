async function async1() {
    console.log('a1s');
    await async2();
    console.log('a1e');
}
async function async2() {
    console.log('as2');
}
console.log('ss');
setTimeout(function(){
    console.log('to');
},0)
async1();
new Promise(function(res){
    console.log('p1');
    res();
}).then(function(){
    console.log('p2');
})
console.log('se');