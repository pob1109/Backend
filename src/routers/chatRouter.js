import { Router } from "express";
import asyncHandler from "express-async-handler"

const chatRouter = Router();

chatRouter.get('/',asyncHandler(async (req,res,next)=>{
    const time=req.query
    
}))

chatRouter.post('/',asyncHandler(async (req,res,next)=>{
    const chat =  req.body

}))