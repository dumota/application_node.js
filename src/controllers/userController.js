import { request } from "express";
import User from "../schemas/user";
import { hash } from 'bcryptjs';
import user from "../schemas/user";



class UserController{

    async create(req,res){
        const {name,email,username,password,phone} = req.body;

        const passwordCrypt = await hash(password,6);
        
        const usuario =  await User.create({
            name,
            email,
            username,
            password : passwordCrypt,
            phone 
            })

            return res.json(usuario);
    }
    async index(req,res){

        const users = await User.find();
        return res.json(users);
    }

}

export default new UserController();