import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    age:{
        type:Number
    }
},{
    timestamps:true
});
 
const usersModel = mongoose.model('users', userSchema);
export default usersModel;
