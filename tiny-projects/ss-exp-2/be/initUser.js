const {MongoClient} = require("mongodb");
const MongoUrl = "mongodb://localhost:27017/";


/**
 * 插入指定的数据
 */

MongoClient.connect(MongoUrl, (err, db) => {
    if (err) throw err;
    let dbo = db.db('ss-exp-2');
    const insertData = [
        {
            id: 'admin',
            pwd: '123456'
        }
    ]
    dbo.collection('user').insertMany(insertData, (err, result) => {
        if (err) throw err;
        db.close().then(r => console.log(r));
    });

})
