const {MongoClient} = require("mongodb");
const MongoUrl = "mongodb://localhost:27017/";


/**
 * 插入指定的数据
 */

MongoClient.connect(MongoUrl, (err, db) => {
    if (err) throw err;
    let dbo = db.db('ss-exp-2');
    const insertData = [
        {Name: '张一', Math: 80, Chinese: 82, Chemical: 71, Physics: 87},
        {Name: '李二', Math: 86, Chinese: 90, Chemical: 91, Physics: 80},
        {Name: '王三', Math: 78, Chinese: 82, Chemical: 87, Physics: 76},
        {Name: '赵四', Math: 75, Chinese: 85, Chemical: 80, Physics: 77},
    ]
    dbo.collection('data').insertMany(insertData, (err, result) => {
        if (err) throw err;
        db.close().then(r => console.log(r));
    });

})
