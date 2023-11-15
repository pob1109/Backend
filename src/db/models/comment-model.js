import { CommentSchema } from "../schemas/comment-schema";
import mongoose from "mongoose";

const Comment = mongoose.model("comment",CommentSchema);

export class CommentModel{
    /* 새 코멘트 생성
    { 사용자 닉네임, 내용(콘텐트), 게시글id } */
    async createComment(commentInfo){
        const createdComment = await Comment.create(commentInfo)
        return createdComment;
    }

    /* 코멘트 삭제
    코멘트 id*/
    async removeComment(commentId){
        const removedComment = await Comment.delete({shortId : commentId})
        // mongoDB에서 id를 어떤 이름으로 지정하는지 확인

        return { result : deleted};
    }

    /* 코멘트 변경
    코멘트 id, 업데이트할 내용(콘텐트)*/
    async updateComment({commentId, updateContent}){
        const updatedComment = await Comment.findOneAndUpdate({shortId : commentId, content : updateContent})
        return updatedComment;
    }

    /* 코멘트 찾기 (마이페이지)
    사용자 닉네임*/
    async findComment(nickname){
        const findedComment = await Comment.find({nickname : nickname})
        return findedComment;
    }
}