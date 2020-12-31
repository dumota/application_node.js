import {sign} from 'jsonwebtoken';
import User from '../schemas/user'
import {compare} from 'bcryptjs'

class SessionController{
    async create(req,res){
        const {username , password} = req.body;


        //verificar se o ususario existe no sistema
        const user = await User.findOne({
            username,
        });
    

        

        if(!user){
            return res.status(404).json({error:"user not found"})
        
        }
        //se o user existir precisamos verificar se a senha esta correta
        const matchPassword = await compare(password , user.password);

        if(!matchPassword){
            return res
            .status(404)
            .json({error:"incorrect pasword or username"})
        
        }    
        const token = sign({},"a3f7c365677abec9f3c2a927669b60c2", {
            subject:new String(user._id),
            expiresIn: '1d'
        });    
        return res.json({
            token,
            user
        })
    }

}

export default new SessionController();