import { ChatSchema } from "../schemas/chatSchema.js";
import mongoose from "mongoose";

export const Chat = mongoose.model("Chat",ChatSchema)

class ChatModel {
    async sendMessage(data){
        try{
            const chatData = {
                nickname : data.nickname,
                with : data.with,
                chat : data.chat,   
/*chat형태 
[{sendedBy:"elice", timeStamp:Date.now(),content:'안녕'},
{sendedBy:"john", timeStamp:Date.now(),content:'안녕'},
{sendedBy:"elice", timeStamp:Date.now(),content:'가자'}]
*/
            }

            const sendedMessage = await Chat.create()
            return sendedMessage;
        }catch(e){
            throw err;
        }
    }
    async readMessage(){
        try{
            const sendedMessage = await Chat.find({})
            return sendedMessage;
        }catch(e){
            throw err;
        }
    }
}

/*  get- 채팅창 모든 내용 불러오기
    post - 채팅 작성
*/ 

export { ChatModel }