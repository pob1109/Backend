import { CommentSchema } from "../schemas/comment-schema.js";
import mongoose from "mongoose";

export const Comment = mongoose.model("Comment",CommentSchema);
const ObjectId = mongoose.Types.ObjectId;

class CommentModel{
    /* 새 코멘트 생성
    { 사용자 닉네임, 내용(콘텐트), 게시글id } */
    async createComment(newComment){
        try{
            const createdComment = await Comment.create(newComment)
            return createdComment;
        }catch(e){
            throw err;
        }
        
    }

    /* 코멘트 삭제
    코멘트 id*/
    async removeComment(data){
        try{
            const removedComment
            = await Comment.findByIdAndDelete(new ObjectId(data));

            return { result : "deleted" };
        }catch(e){
            throw err;
        }
    }

    /*게시글 삭제 시 
    포스트 id*/
    async removeAllComment(data){
        try{
            await Comment.deleteMany({postId : new ObjectId(data)});

        }catch(e){
            throw err;
        }
    }

    /* 코멘트 수정
    코멘트 id, 업데이트할 내용(콘텐트)*/
    async updateComment({content, commentId}){
        try{
            const updatedComment
            = await Comment.findByIdAndUpdate(new ObjectId(commentId),{content})

            return updatedComment;
        }catch(e){
            throw err;
        }
        
    }

    /* 코멘트 보기 (관리자&마이페이지)
    사용자 닉네임*/
    async findMyComment(data){

        let filter={}
        if(data.status===1){
            filter.nickname=data.status.nickname
        }

        //const MaxPost = Number(pageSize)
        //const hidePost = (Number(page)-1)*MaxPost
        const findedMyComment = await Comment.find(filter)
        //.skip(hidePost).limit(MaxPost).populate('postId');

            return findedMyComment;
        }catch(e){
            throw err;
        }
        
    }

    /* 모든 코멘트 보기 (관리자)
    사용자 닉네임*/

    async findAllComment(page,pageSize){
        try{
            //const MaxPost = Number(pageSize)
            //const hidePost = (Number(page)-1)*MaxPost
            const findedAllComment = await Comment.find({}).populate('postId');//.skip(hidePost).limit(MaxPost)
        
            return findedAllComment;
        }catch(e){
            throw err;
        }
        
    }

    /* 글에서 코멘트 보기
    게시글id */
    async findPostComment(data){
        try{
            const findedPostComment = await Comment.find({postId:data}).populate('postId')

            return findedPostComment;
        }catch(e){
            throw err;
        }
        
    }
}

const commentModel = new CommentModel();
export {commentModel};
