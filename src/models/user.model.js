import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    }
})

export default mongoose.model('User',userSchema)