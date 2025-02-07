import axios from '../axios/axios';
import { UserData } from "./UserData";

const AutService = {
    
    logInUser: (userData: Pick<UserData, "email" | "password">) => {
        return axios.post("/auth/login", {
            email: userData.email,
            password: userData.password
        });
    },

    registerUser: (userData: UserData) => {
        return axios.post("/auth/register", {
            email: userData.email,
            password: userData.password,
            name: userData.name,
            gender: userData.gender,
            lastName: userData.lastName,
            age: userData.age,
            height: userData.height,
            weight: userData.weight,
            userName: userData.userName
        });
    }
}

export default AutService;