import { errGenerator } from "../../errGenerator.js";
import asyncHandler from "express-async-handler"
import { User } from "../db/models/userModel.js";

//회원가입시 이메일과 닉네임이 이미 존재하면 에러를 반환
export const duplicateCheckUser = asyncHandler(async (req,res,next)=>{
        const {email,nickname}=req.body

        const sameData = await User.findOne({$or:[{email},{nickname}]})

        if(sameData){
                throw errGenerator("이메일이나 닉네임이 중복되는 유저가 존재합니다.",409,{});
        }

        next();
})