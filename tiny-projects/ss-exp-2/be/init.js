const {MongoClient} = require("mongodb");
const MongoUrl = "mongodb://localhost:27017/";


/**
 * 插入指定的数据
 */

MongoClient.connect(MongoUrl, (err, db) => {
    if (err) throw err;
    let dbo = db.db('ss-exp-2');
    const insertData = [
        {name: '张一', mat: 80, chn: 82, che: 71, phy: 87},
        {name: '李二', mat: 86, chn: 90, che: 91, phy: 80},
        {name: '王三', mat: 78, chn: 82, che: 87, phy: 76},
        {name: '赵四', mat: 75, chn: 85, che: 80, phy: 77},
    ]
    dbo.collection('data').insertMany(insertData, (err, result) => {
        if (err) throw err;
        db.close().then(r => console.log(r));
    });

})
