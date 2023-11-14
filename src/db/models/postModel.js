import { PostSchema } from "../schemas/postSchema";
import mongoose from "mongoose";

export const User = mongoose.model("Post",PostSchema);