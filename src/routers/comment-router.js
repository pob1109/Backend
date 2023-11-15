const express = require('express')
const commentRouter = express.Router();

import CommentModel from '../db/models/comment-model'


//마이페이지 - 작성한 댓글 가져오기
commentRouter.get('/comment/:nickname', async (req, res, next) => {
    try {
        const findedComment
         = await CommentModel.findMyComment(req.body.nickname)

         res.status(200).send(findedComment);
    } catch (e) {
        next(e)
    }
})


//게시글에서 댓글 가져오기
commentRouter.get('/comment/:postId', async (req, res, next) => {
    try {
        const findedPostComment
         = await CommentModel.findPostComment()

         res.status(200).send(findedPostComment);
    } catch (e) {
        next(e)
    }
})


 //관리자페이지에서 전체 댓글 보기
commentRouter.get('/comment', async (req, res, next) => {
    try {
        const findedAllComment
         = await CommentModel.findAllComment()

         res.status(200).send(findedAllComment);
    } catch (e) {
        next(e)
    }
})


//댓글 달기
commentRouter.post('/comment/:postId', async (req, res, next) => {
    try {
        const newComment = {
            nickname: req.body.nickname,
            content: req.body.content,
            postId: req.body.postId,
        }

        const createdNewComment
         = await CommentModel.createComment(newComment)

        res.status(200).send(createdNewComment);
    } catch (e) {
        next(e)
    }
})


//댓글 수정하기
commentRouter.put('/comment/:postId', async (req, res, next) => {
    try {
        const comment = {
            commentId: req.body.commentId,
            updateContent : req.body.content
        }
        const changedComment
         = await CommentModel.updateComment(comment)

        res.status(200).send(changedComment)
    } catch (e) {
        next(e)
    }
})


// 댓글 삭제하기
commentRouter.delete('/comment/:postid/:commentid', async (req, res, next) => {
    try {
        const deleted
         = await CommentModel.removeComment(req.body.commentId);
        req.status(200).json(deleted);
    } catch (e) {
        next(e)
    }
})


export {commentRouter};