import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Schema = new Schema({
    ticketID:{
        type:String,
        required:true
    },
    userID:{type:Schema.Types.ObjectId,ref:'User'},
   
    dateCreated:{
        type:Date,
        default:Date.now
    },
    dateClosed:{
        type:Date,
    },
    dateUpdated:{
        type:Date,
    },
    description:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    orderRenewedID:{
        type:String
    },
    dateUpdated:{
        type:Date
    },
    lastUserUpdatedID:{
        type:String
    },
    assignedToID:{
        type:String
    }

});

const Order = mongoose.model('Order',OrderSchema);

export default Order;