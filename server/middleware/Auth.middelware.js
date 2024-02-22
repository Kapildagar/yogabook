

import jwt from "jsonwebtoken"
import User from "../models/User.models.js"

const Auth=async(req,res,next)=>{
    try{
        console.log(req.cookies)
        const token=req.cookies?.Refreshtoken;
        console.log(token);

        if(!token){
           res.status(400).json({
            sucess:false,
            message:"user NOt Logined"
           })
        }

        const userId=await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        // console(userId);
        const user=await User.findById(userId?._id);
        if(!user){
             new ApiError(401,"User does not exist");
        }
        req.user=user;
        next();
    }
    catch(err){
        console.log(err);
    }

}

export default Auth;