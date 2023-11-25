import { Router } from "express";
import asyncHandler from "express-async-handler"
import { chatModel } from "../db/models/chatModel.js";

const chatRouter = Router();

chatRouter.get('/',asyncHandler(async (req,res,next)=>{
    const RoomsData = await chatModel.getChatRoom();
    res.status(200).json(RoomsData)
}))

chatRouter.post('/',asyncHandler(async (req,res,next)=>{
    const {nick1,nick2}=req.body
    await chatModel.makeChatRoom(nick1,nick2);
    res.status(200).send("success")
}))

chatRouter.get('/:chatRoomId',asyncHandler(async (req,res,next)=>{
    const chatRoomId=req.params.chatRoomId
    const lastTimestamp=req.query
    const RoomData = await chatModel.readMessage(chatRoomId,lastTimestamp);
    res.status(200).json(RoomData)
}))

chatRouter.post('/:chatRoomId',asyncHandler(async (req,res,next)=>{
    const chatData=req.body
    const chatRoomId=req.params.chatRoomId
    await chatModel.sendMessage(chatRoomId,chatData);
    res.status(200).send("success")
}))

export {chatRouter};