const express = require('express')
const router = express.Router();
import CommentModel from '../db/models/comment-model'


router.get('/comment', async (req, res, next) => {
    try {
        const findedComment
         = CommentModel.findComment(req.body.nickname)

         res.send(findedComment);
    } catch (e) {
        next(e)
    }

})

router.post('/comment', async (req, res, next) => {
    try {
        const newComment = {
            nickname: req.body.nickname,
            content: req.body.content,
            postId: req.body.postId,
        }

        const createdNewComment
         = await CommentModel.createComment(newComment)

        res.send(createdNewComment);
    } catch (e) {
        next(e)
    }

})

router.put('/comment/:commentId', async (req, res, next) => {
    try {
        const comment = {
            commentId: req.body.commentId,
            updateContent : req.body.content
        }
        const changedComment
         = await CommentModel.updateComment(comment)

        res.send(changedComment)
    } catch (e) {
        next(e)
    }
})

router.delete('/comment/:commentId', async (req, res, next) => {
    try {
        const deleted
         = CommentModel.removeComment(req.body.commentId);
        req.send(deleted);
    } catch (e) {
        next(e)
    }
})


