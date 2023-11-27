import { ChatSchema, ChatWrapSchema } from "../schemas/chatSchema.js";
import mongoose from "mongoose";

export const Chat = mongoose.model("Chat",ChatSchema)
export const ChatRoom = mongoose.model("Chat",ChatWrapSchema)

const ObjectId = mongoose.Types.ObjectId;

class ChatModel {

    // 채팅방 만들기
    async makeChatRoom(data){
        try{
            const createdChatRoom = await ChatRoom.create({});  // 방만들기

            await ChatRoom.create({ user_Id: data.user1, room_Id: createdChatRoom._id});    // 첫 메세지
            await ChatRoom.create({ user_Id: data.user2, room_Id: createdChatRoom._id});
            
            return ;
        }catch(e){
            throw e;
        }
    };

    // 채팅방 안에서 채팅 보내기
    async sendChat(room_Id, data){
        try{
            await ChatRoom.findOneAndUpdate({room_Id},{$push:{content:data}})
            return ;
        }catch(e){
            throw e;
        }
    };

    // 내 전체 채팅방 불러오기
    async myChatRoom(data){
        try{
            const myAllChatRoom = await ChatRoom.find({user_Id : data});
            return myAllChatRoom;
        }catch(e){
            throw e;
        }
    };

    // 하나의 채팅방 불러오기
    async oneChat(data){
        try{
            const myAllChatRoom = await ChatRoom.find({user_Id : data});
            const oneChatRoom = await Chat.find({room_Id : myAllChatRoom.room_Id});
            return oneChatRoom;
        }catch(e){
            throw e;
        }
    };

    
}
const chatModel= new ChatModel()

export { chatModel }



//class ChatModel {
    // 채팅방이 없으면 하나 만들고, 있으면 있는 객체의 배열 안에 push
    /** 
    async sendMessage(data){
        try{
            const findChatting = await Chat.findOne({nickname : data.nickname, with : data.with})
            if(!findChatting){
                const chatData = {
                    nickname : data.nickname,
                    with : data.with,
                    chat : data.chat,   
                }

                const sendedMessage = await Chat.create(chatData)
                
                return sendedMessage;
            }else{
                if(!data.chat){
                    return findChatting
                }
                findChatting.chat.push(data.chat);
                findChatting.save();

                return findChatting;
            }
            
        }catch(e){
            throw err;
        }
    }
*/
//     async makeChatRoom(nickname,chatWith,chat){
//         try{
//             const chatData = {
//                 nickname : nickname,
//                 chatWith : chatWith,
//                 chat : [],   
//             }
//             await Chat.create(chatData)
//         return;
//         }catch(err){
//             throw err;
//         }
//     }

//     async sendMessage(nickname,chatWith){
//         try{
//             const data = await Chat.findOne({nickname:nickname, chatWith:chatWith},)//푸시
//             return data;
//         }catch(err){
//             throw err;
//         }
//     }

//     async readMessage(chatRoomId){
//         try{
//             const sendedMessage = await Chat.find(new ObjectId(chatRoomId))
            
//             return sendedMessage;
//         }catch(err){
//            throw err;
//         }
//     }

//     /*async getChatRoom(){
//         try{
//             const chatRoomData = await Chat.find({})
//             return chatRoomData;
//         }catch(err){
//             throw err;
//         }
//     }*/
//     // 내 모든 채팅방 확인
//     async allChat(){
//         try{
//             const allMessage = await Chat.find({nickname : data.nickname})
//             return allMessage;
//         }catch(e){
//             throw err;
//         }
//     }

//     /* 
//     async oneChat(){
//         try{
//             const allMessage = await Chat.find({nickname : data.nickname, with : data.with})
//             return allMessage;
//         }catch(e){
//             throw err;
//         }
//     }
//     */
// }

// /*  get- 채팅창 모든 내용 불러오기
//     post - 채팅 작성
// */ 
