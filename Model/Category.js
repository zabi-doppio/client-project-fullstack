import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Category Schema Pattern or Category Model

const CategprySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    subCategories:[
        String,
        required
    ]
       
    ,
    date:{
        type:Date,
        default:Date.now
    }
});

const Category = mongoose.model('Category',CategorySchema);

export default Category;