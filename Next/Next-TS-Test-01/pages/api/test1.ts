// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient} from "mongodb";
import {rejects} from "assert";

const MongoUrl: string = "mongodb://localhost:27017/";

type Data = {
    _id:string,
    id: number,
    data: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    let sendValue:Data;
    const getData = new Promise<void>((resolve,reject)=>{
        MongoClient.connect(MongoUrl,(err,db:any)=>{
            const dbo = db.db('test');
            dbo.collection('test1').find({id:1}).toArray((err:any,result:any)=>{
                if(err) throw err;
                sendValue = result[0];
                db.close();
                resolve();
            });
        })
    });
    const send = ()=>{
        res.status(200).json(sendValue);
    }
    Promise.all([getData]).then(send);
}

export default handler;