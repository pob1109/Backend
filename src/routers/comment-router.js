import express from "express";
const commentRouter = express.Router();
import asyncHandler from 'express-async-handler'
import { commentModel } from '../db/models/comment-model.js'
import { checkToken } from "../middlewares/checkToken.js";
import { sameUser } from "../middlewares/sameUser.js";
import {isAdmin} from "../middlewares/isAdmin.js"

//마이페이지 - 작성한 댓글 가져오기
commentRouter.get('/:nickname',checkToken,sameUser,asyncHandler(async (req, res, next) => {  // checkToken,
    const {page,pageSize}=req.query;
    const findedComment
        = await commentModel.findMyComment(page,pageSize,req.params.nickname)

    res.status(200).send(findedComment);
}))


//게시글 - 댓글 가져오기
commentRouter.get('/detail/:postId', asyncHandler(async (req, res, next) => {

    const findedComment
        = await commentModel.findPostComment(req.params.postId)

    res.status(200).send(findedComment);
}))



//관리자페이지 - 전체 댓글 보기
commentRouter.get('/',isAdmin, asyncHandler(async (req, res, next) => {   //isAdmin,
    const {page,pageSize}=req.query;

    const findedAllComment
        = await commentModel.findAllComment(page,pageSize)

    res.status(200).send(findedAllComment);
}))


//댓글 달기
commentRouter.post('/:postId',checkToken,asyncHandler(async (req, res, next) => { // checkToken,
    const newComment = {
        nickname: req.body.nickname,
        content: req.body.content,
        postId: req.params.postId,
    }

    const createdNewComment
        = await commentModel.createComment(newComment)

    res.status(200).send(createdNewComment);
}))


//댓글 수정하기
commentRouter.put('/:commentId',checkToken,sameUser,asyncHandler(async (req, res, next) => {//checkToken,sameUser

    const comment = {
        content: req.body.content,
        commentId: req.params.commentId,
    }
    const changedComment
        = await commentModel.updateComment(comment)

    res.status(200).send(changedComment)
}))


// 게시글 - 댓글 삭제하기
commentRouter.delete('/:commentId',checkToken,sameUser,asyncHandler(async (req, res, next) => { //checkToken,sameUser

    const deleted
        = await commentModel.removeComment(req.params.commentId);

    res.status(200).json(deleted);
}))


export { commentRouter };
