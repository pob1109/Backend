import { User } from "../db/models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId; //id string 값을 objectid 형식으로 바꿈

class UserService{
    async getUsers(page,pageSize){
        try{
            const MaxPost = Number(pageSize)
            const hidePost = (Number(page)-1)*MaxPost
            const usersData = await User.find({}).skip(hidePost).limit(MaxPost);
            return usersData;
        }catch(err){
            throw err;
        }
    }

    async getUser(id){
        try{
            const usersData = await User.findById(new ObjectId(id))
            return usersData;
        }catch(err){
            throw err;
        }
    }

    async loginUser(email,password){

        try{
            const data = await User.findOne({email});
            const userId=String(data._id);
            const check = await bcrypt.compare(password,data.password)
            if(check){
                const token= jwt.sign({userId},process.env.jwt_key,{expiresIn:"1h"});
                return {
                    token:token
                };
            }
            return;
        }catch(err){
            throw err;
        }
    }


    async joinUser(email,nickname,password){
        
        try{
            const hashedPassword = await bcrypt.hash(password, 5);
            const newUser = {
                email:email,
                nickname:nickname,
                password:hashedPassword,
            }
            await User.create(newUser);
            return;
        }catch(err){
            throw err;
        }
    }

    async delUser(id){
        try{
            await User.findByIdAndDelete(new ObjectId(id));
            return;
        }catch(err){
            throw err;
        }
    }
}

const userService = new UserService();
export {userService};