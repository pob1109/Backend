import { Router } from "express";
import { userService } from "../services/userService.js";

const userRouter = Router();

userRouter.get('/', async (req,res)=>{
    const userData = await userService.getUsers()
    res.send(userData);
})

userRouter.post('/join', async (req,res)=>{
    await userService.joinUser()
    res.status(201).send("success");
})

export {userRouter};