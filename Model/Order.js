import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Order Schema Pattern or Order Model

const OrderSchema = new Schema({
    userID:{type:Schema.Types.ObjectId,ref:'User'},
    clientID:{tpye:Schema.Types.ObjectId,ref:'Client'},
    categoryID:{type:Schema.Types.ObjectId,ref:"Category"},
    priceExclTax:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    dateStart:{
        tpye:Date,
        required:true
    },
    dateEnd:{
        type:Date,
        required:true
    },
    dateClosed:{
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
    }

});

const Order = mongoose.model('Order',OrderSchema);

export default Order;
