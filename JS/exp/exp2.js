let now = new Date();

let postData = {
    log: {
        info: 'good',
        data: {name:'123'},
        level: 'DEBUG',
        now: now
    },
    mongoUrl: 'mongodb+srv://makinohara:mongo-123456@master.svnck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority	',
    collection: 'test2'
}

console.log(JSON.stringify(postData));