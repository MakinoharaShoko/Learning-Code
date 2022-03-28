const arr = [
    { name: 'Sam', age: 23 },
    { name: 'Vince', age: 22 },
]

console.log(arr.reduce((a, c) => {
    const curr = {};
    curr[c.name] = c.age;
    return { ...a, ...curr };
}, {}));