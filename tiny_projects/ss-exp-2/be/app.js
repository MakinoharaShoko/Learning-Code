const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const {MongoClient} = require("mongodb");
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
const Port = 3000;
app.use('/', express.static(__dirname + '/public'));//allow browser access resources
process.env.PORT = Port;
const MongoUrl = "mongodb://localhost:27017/";

app.post('/getData', (req, res) => {
    const requestUsername = req.body['user'];
    const requestPassword = req.body['pwd'];
    const errJson = {
        state: 'error',
        data: []
    }
    const okJson = {
        state: 'OK',
        data: []
    }
    MongoClient.connect(MongoUrl, (err, db) => {
        if (err) throw  err;
        let dbo = db.db('ss-exp-2');
        dbo.collection('user').find({id: requestUsername}).toArray((err, result) => {
            if (err) throw err;
            if (result.length <= 0) {
                res.send(errJson);
            } else {
                const truePassword = result[0]['pwd'];
                if (truePassword === requestPassword) {
                    sendData();
                } else
                    res.send(errJson);
            }
            db.close();
        })
    })

    function sendData() {
        MongoClient.connect(MongoUrl, (err, db) => {
            if (err) throw  err;
            const dbo = db.db('ss-exp-2');
            dbo.collection('data').find().toArray((err, result) => {
                okJson.data = result;
                res.send(okJson);
                db.close();
            })
        })
    }

})

app.listen(Port, () => console.log('服务器已就绪，运行在端口' + Port));
