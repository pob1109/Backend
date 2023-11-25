import { ChatSchema } from "../schemas/chatSchema.js";
import mongoose from "mongoose";

export const Chat = mongoose.model("Chat",ChatSchema)
const ObjectId = mongoose.Types.ObjectId;

class ChatModel {
    async makeChatRoom(nick1,nick2){
        try{
            const chatData = {
                nickname : nick1,
                with : nick2,
                chat : [],   
/*chat형태 
[{sendedBy:"elice", timeStamp:Date.now(),content:'안녕'},
{sendedBy:"john", timeStamp:Date.now(),content:'안녕'},
{sendedBy:"elice", timeStamp:Date.now(),content:'가자'}]
*/
            }
            await Chat.create(chatData)
        return;
        }catch(err){
            throw err;
        }
    }

    async getChatRoom(){
        try{
            const chatRoomData = await Chat.find({})
            return chatRoomData;
        }catch(err){
            throw err;
        }
    }

    async sendMessage(chatRoomId,data){
        try{
            
            await Chat.findByIdAndUpdate(new ObjectId(chatRoomId),{$push:{chat:data}})
            return;
        }catch(err){
            throw err;
        }
    }

    async readMessage(chatRoomId,lastTimestamp){
        try{
            const filter ={
                _id: new ObjectId(chatRoomId),
                chat: {
                    $elemMatch: { "timestamp": { $gt: lastTimestamp } }
                  }
            }
            const sendedMessage = await Chat.find(filter)
            return sendedMessage;
        }catch(err){
            throw err;
        }
    }
}

/*  get- 채팅창 모든 내용 불러오기
    post - 채팅 작성
*/ 
const chatModel= new ChatModel()

export { chatModel }