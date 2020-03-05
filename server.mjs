import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import ConnectDB from './config/db.mjs';

const app = express();

ConnectDB()

const corsOptions ={
    origin :"*",
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));


app.use(bodyParser.json());



app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json({msg:"Hello from Server"})
})


const PORT = process.env.PORT || 9000;


app.listen(PORT,()=>{
console.log(`Server is Running on Port ${PORT}`);
})