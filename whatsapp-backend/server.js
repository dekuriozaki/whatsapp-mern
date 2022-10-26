//importing
import express, { application } from 'express'
import mongoose, { mongo } from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';

//app config
const app = express()
const port = process.env.PORT || 9000;
const pusher = new Pusher({
    appId: "1497484",
    key: "1080998a0f9e901baba0",
    secret: "c61f4d267d3aad1cf1fb",
    cluster: "ap2",
    useTLS: true
  });

//middlewares
app.use(express.json());
app.use(cors());


//DB config
const connection_url = 'mongodb+srv://admin:7ePXBATefUGinBNg@cluster0.parmren.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connection_url,{})

const db = mongoose.connection

db.once('open',()=>{
    console.log('DB connected');
    const msgCollection = db.collection('messagecontents');  
    const changeStream = msgCollection.watch();

    changeStream.on('change',(change)=>{
        console.log('A new message has been arrived',change);
        if(change.operationType === 'insert'){
            const msgDetails = change.fullDocument;
            pusher.trigger('messages','inserted',
            {
                name: msgDetails.name,
                message: msgDetails.message,
                timestamp: msgDetails.timestamp,
                received: msgDetails.received
            });
        } else{
            console.log('Error triggering pusher');
        }
    })
})

// ???

// api routes
app.get('/',(req,res)=>res.status(200).send("Fetched"))

app.get('/api/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.post('/api/messages/new',(req,res)=>{
    const dbMessage = req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

//listener
app.listen(port,()=>console.log(`Listening on localhost:${port}`));