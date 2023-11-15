import express from "express";
import { userRouter } from "./routers/userRouter.js";

const app = express();

app.use(express.json());

app.use('/api/user',userRouter)

app.use((err,req,res,next)=>{
    const status = err.status ? err.status : 500;
    const errMessage = err.message
    console.error(status,errMessage);
    res.status(status).send(errMessage);
});

export {app};