import  verify from 'jsonwebtoken';

export default async(req,res,next)=>{
    const authHeader = req.headers.autorizado;

    if(!authHeader){
        return res.status(401).json({error:"user not authorizated"});
    }

    // qnd recebemos o token ele vem  Bearer kljhjhjhjjhjhhjjhhj
    const [ , token]= authHeader.split(" ");
    

    try{
        const decoded = verify(token, "a3f7c365677abec9f3c2a927669b60c2");
        console.log(decoded)
        return next();

    }catch(err){
        return res.status(401).json({error:"inavalid jwt token"})
    }    

}