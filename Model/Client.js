import mongoose from 'mongoose';
const Schema = mongoose.Schema;


// Client Schema Pattern or Client Model

const ClientSchema = new Schema({
    companyName:{
        type:String,
        required:true
    },
    type:{
        type:Number,
        required:true
    },
    typePrice:{
        type:Number,
        required:true
    },
    partitaIva:{
        type:String,
        required:true
    },
    codiceFiscale:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    domains:[String],
    notes:{
        type:String,
        required:true
    }
})

const Client = mongoose.model('Client',ClientSchema);

export default Client;