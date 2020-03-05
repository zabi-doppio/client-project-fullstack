import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import ConnectDB from './config/db.js';
import router from './route/users.js';
const app = express();

ConnectDB()

const corsOptions ={
    origin :"*",
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));


app.use(bodyParser.json());



app.use(bodyParser.urlencoded({extended:true}));


// Api Routes
app.use('/api/users',router);


const PORT = process.env.PORT || 9000;


app.listen(PORT,()=>{
console.log(`Server is Running on Port ${PORT}`);
})