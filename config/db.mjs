import mongoose from 'mongoose';
import config from 'config';



const db = config.get('mongoUri');



const connectDB = async ()=>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
        console.log('MongoDB connected......')
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB;