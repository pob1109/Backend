import { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
  },
);

export { CommentSchema };
