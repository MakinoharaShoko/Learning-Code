const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
const Port = 3001;
process.env.PORT = Port;

app.get('/test1',(req,res)=>{
    res.send('123');
})

app.post('/testPost',(req,res)=>{
    let s = req.body['testData'];
    console.log(s);
    res.send(s);
})

app.listen(Port, () => console.log('服务器已就绪，运行在端口' + Port));