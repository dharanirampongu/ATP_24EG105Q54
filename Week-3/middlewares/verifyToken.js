import jwt from 'jsonwebtoken';
const {verify}=jwt;
export function verifyToken(req,res,next){
    //token verification logic
    const token=req.cookies?.token;
    //console.log("token object is:",req.cookie?.token)
    //if req from unauthorized user
    if(!token)
    {
        return res.status(401).json({message:"Please login"})
    }
    try{
    //if token exists
    const decodedToken=verify(token,"abdcef");
    console.log(decodedToken)
    //attach decodedToken
    decodedToken=token;
    //call next
    next();
    }
    catch(err){
        res.status(401).json({message:"session expired.Please relogin"})
    }
}