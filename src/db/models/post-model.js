import { PostSchema } from "../schemas/post-schema";
import mongoose from "mongoose";

const post = mongoose.model("Post",PostSchema);
