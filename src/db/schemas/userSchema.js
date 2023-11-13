import { Schema } from "mongoose";
export const UserSchema = new Schema({
    email:{type:String,required: true, unique: true},
    nickname:{type:String,required: true, unique: true },
    password:{type:String,required: true},
    isAdmin:{type:Boolean,default:false},
},{versionKey : false})

