import mongoose from "mongoose"

const accountSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String,
        unique:true
    },
    email:{
        required:true,
        type:email,
        unique:true
    },
    password:{
        required:true,
        type:String,
    },
    enrolledCourses:{
        type:String,
    },
    adminOf:{
        type:String,
    }
})


const account=mongoose.model("account",accountSchema)
export default account