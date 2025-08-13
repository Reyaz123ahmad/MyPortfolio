const mongoose=require('mongoose');
const Form = require('./Form'); 
const statusSchema=new mongoose.Schema(
    {
        
        card:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Form'
        },
        status:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
);
module.exports=mongoose.model("Status",statusSchema);
