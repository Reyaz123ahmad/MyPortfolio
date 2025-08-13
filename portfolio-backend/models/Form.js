const mongoose=require('mongoose');
const Status = require('./Status'); 
const formSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50
        },
        phone:{
            type:Number,
            required:true,
            maxLength:50
        },
        email:{
            type:String,
            required:true,
            maxLength:100
        },
        message:{
            type:String,
            required:true,
            maxLength:200

        },
        statuses:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Status'
        }],
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
module.exports=mongoose.model("Form",formSchema);
