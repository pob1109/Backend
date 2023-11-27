import { Schema } from "mongoose";

export const ChatSchema = new Schema(
  {
    "room_Id": {
      type: String,
      required: true,
    },
    "content": {  // json[]
      type: Array,
      required: true,
    },
  },
  {
    "timestamp": true,
    collection: "chat",
  }
)

// Chat_wrap
export const ChatWrapSchema = new Schema(
  {
    "user_Id": {
      type: String,
      required: true,
    },
    "room_Id": {
      type: String,
      required: true,
    },
  },
  {
    "timestamp": date,
    collection: "chatRoom",
  }
)

