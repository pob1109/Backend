import { Schema } from "mongoose";
export const PostSchema = new Schema({
    board_category:{type:String,required: true},
    product_category:{type:String,required: true},
    event_date:{type:String},
    event_location:{type:String},
    nickname:{type:String,required: true},
    title:{type:String,required: true},
    content:{type:String,required: true},
    img:{type:String},
    date:{type:String,default:new Date()},
    isFound:{type:Boolean,defalut:false}
},{versionKey : false})

