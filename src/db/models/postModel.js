import { errGenerator } from "../../../errGenerator";
import { PostSchema } from "../schemas/postSchema";
import mongoose from "mongoose";
import { errGenerator } from "../../../errGenerator";

export const Post = mongoose.model("Post",PostSchema);

class PostModel{
    async createPost(userData,postData){
        try{

        }catch(e){ 
            throw err;
        }
    }
};

export const postModel = new PostModel();