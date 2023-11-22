import express from "express";
const postRouter = express.Router();
import asyncHandler from 'express-async-handler'
import { postModel } from '../db/models/postModel.js'
import { checkToken } from "../middlewares/checkToken.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { object } from "webidl-conversions";


//마이페이지 - 게시글 가져오기
postRouter.get('/:nickname',  asyncHandler(async (req, res, next) => {  //checkToken,
    const findedPost
        = await postModel.findMyPost(req.params.nickname)

    res.status(200).send(findedPost);
}))


//게시글 가져오기
//_id = object(_id)

postRouter.get('/detail/:postId', asyncHandler(async (req, res, next) => {  
    
    const findedPost
        = await postModel.findPost(req.params.postId)

    res.status(200).send(findedPost);
}))


//전체 게시글 보기
postRouter.get('/', asyncHandler(async (req, res, next) => {  
    const {page,pageSize}=req.query;

    const findedAllPost
        = await postModel.findAllPost(page,pageSize)

    res.status(200).send(findedAllPost);
}))


//게시글 작성
postRouter.post('/', asyncHandler(async (req, res, next) => { //checkToken, 
    const newPost = req.body
    const createdNewPost
        = await postModel.createPost(newPost)

    res.status(200).send(createdNewPost);
}))


//게시글 수정하기
postRouter.put('/:postId', asyncHandler(async (req, res, next) => { //checkToken, 

    const post = req.body;
    const postId=req.params.postId
    const changedPost
        = await postModel.updatePost(postId,post)

    res.status(200).send(changedPost)
}))


// 게시글 삭제하기
postRouter.delete('/:postId', asyncHandler(async (req, res, next) => { //checkToken, isAdmin, 
    const deleted
        = await postModel.removePost(req.params.postId);

    res.status(200).json(deleted);
}))

//검색기능 테스트
postRouter.get('/post/search', asyncHandler(async (req, res, next) => {  
    // 경로를 왜 'post/search'로 해야하는지 모르겠음

    const data = req.query;
    console.log(data)   // 콘솔이 찍히지도 않음
    const searchResult = await postModel.searchPost(data);

    res.status(200).send(searchResult);
}))


export { postRouter };
