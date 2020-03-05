import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'


const app = express();


const corsOptions ={
    origin :"*",
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));


app.use(bodyParser.json());



app.use(bodyParser.urlencoded({extended:true}));




const PORT = process.env.PORT || 9000;


app.listen(PORT,()=>{
console.log(`Server is Running on Port ${PORT}`);
})