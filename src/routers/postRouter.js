import express from "express";
const postRouter = express.Router();
import asyncHandler from 'express-async-handler'
import { postModel } from '../db/models/postModel.js'


//마이페이지 - 게시글 가져오기
postRouter.get('/:nickname', asyncHandler(async (req, res, next) => {
    const findedComment
        = await postModel.findMyComment(req.params.nickname)

    res.status(200).send(findedComment);
}))


//게시글 가져오기
postRouter.get('/:postId', asyncHandler(async (req, res, next) => {

    const findedPost
        = await postModel.findPost(req.params.postId)

    res.status(200).send(findedPost);
}))


//관리자페이지 - 게시글 보기
postRouter.get('/', asyncHandler(async (req, res, next) => {

    const findedAllPost
        = await postModel.findAllPost()

    res.status(200).send(findedAllPost);
}))


//게시글 작성
postRouter.post('/post', asyncHandler(async (req, res, next) => {
    const newPost = {
        board_category: req.body.board_category,
        product_category: req.body.product_category,
        event_date: req.body.event_date,
        event_location: req.body.event_location,
        nickname: req.body.nickname,
        title: req.body.title ,
        content: req.body.content,
        picture: req.body.picture,
        isFound: req.body.isFound,
    }
    console.log(req.body)
    const createdNewPost
        = await postModel.createdPost(newPost)

    res.status(200).send(createdNewPost);
}))


//게시글 수정하기
postRouter.put('/:postId', asyncHandler(async (req, res, next) => {

    const post = {
        board_category: req.body.board_category,
        product_category: req.body.product_category,
        event_date: req.body.event_date,
        event_location: req.body.event_location,
        nickname: req.body.nickname,
        title: req.body.title ,
        content: req.body.content,
        picture: req.body.picture,
        isFound: req.body.isFound,
    }
    const changedPost
        = await postModel.updateComment(post)

    res.status(200).send(changedPost)
}))


// 게시글 삭제하기
postRouter.delete('/:postId', asyncHandler(async (req, res, next) => {

    const deleted
        = await postModel.removePost(req.params.postId);

    res.status(200).json(deleted);
}))


export { postRouter };