import asyncHandler from "express-async-handler"
import { Router } from "express";
import { postModel } from "../db/models/postModel";
import { checkToken } from "../middlewares/checkToken";
import multer from "multer"

const postRouter = Router();

//전체 게시글
postRouter.get('/',asyncHandler(async(req,res,next)=>{

}));

//전체 게시글(관리자, 마이페이지용)
postRouter.get('/mypage',checkToken,asyncHandler(async(req,res,next)=>{
    
}));

//특정 게시글 확인
postRouter.get('/:postId',asyncHandler(async(req,res,next)=>{
    
}));

//게시글 작성
postRouter.post('/',checkToken,asyncHandler(async(req,res,next)=>{
    const userData = req.user;
    const postData = req.body;
    await postModel.createPost(userData,postData);
    res.status(201).send("success");
}));

//게시글 수정
postRouter.put('/:postId',checkToken,asyncHandler(async(req,res,next)=>{
    
}));

//게시글 삭제
postRouter.delete('/:postId',checkToken,asyncHandler(async(req,res,next)=>{
    
}));

export {postRouter}