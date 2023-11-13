import { User } from "../db/models/usermodel.js";

class UserService{
    async getUsers(){
        const usersData = await User.find({});
        return usersData;
    }
    async joinUser(){
        const newUser = {
            email:"aaa@gmail.com",
            nickname:"zzz",
            password:"12345678",
        }
        await User.create(newUser);
        return;
    }
}

const userService = new UserService();
export {userService};