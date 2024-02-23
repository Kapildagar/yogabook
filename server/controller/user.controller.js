// import { sendotp } from "../utilis/sendotp.js";


//{for sending the otp}
// const register = async (req, res, next) => {
//     try {
//         console.log(req.body);
//         const { name, email, phonenumber } = req.body;
//         //         const accountSid = process.env.TWILIO_ACCOUNT_SID;
//         // const authToken = process.env.TWILIO_AUTH_TOKEN;
//         // const client = require('twilio')(accountSid, authToken);

//       await sendotp(phonenumber);

//         console.log(name, email, phonenumber);
//         res.status(200).json({
//             "working": ""
//         })
//     }
//     catch (err) {
//         console.log(err);
//     }
// }



import User from '../models/User.models.js';
import Book from '../models/Book.models.js';



const registerUser = async (req, res, next) => {

    try {
        const { password, name, email, phonenumber } = req.body;
        console.log(password, name, email, phonenumber)
        const userexist = await User.findOne({
            $or: [{ email }, { name }]
        })
        if (userexist) {
            res.status(400).json({
                "success": false,
                message: "User ALready exsist"
            })
        }


        const user = await User.create({
            name,
            email,
            password,
            phonenumber
        })
        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )

        if (!createdUser) {
            res.status(400).json({
                "success": false,
                message: "User does not exsist"
            })
        }
        return res.status(201).json({
            "success": "true",
            createdUser
        })
    }
    catch (err) {
        console.log(err)
    }
}


const Loginuser = async (req, res, next) => {
    try {
        console.log(req.body)
        const { phonenumber, password } = req.body;

        const user = await User.findOne({ phonenumber });
        console.log(user)
        if (!user) {
            res.status(400).json({
                "success": false,
                message: "User does not exsist"
            })
        }

        const checkpassword = await user.isPasswordCorrect(password)
        console.log(checkpassword);
        if (!checkpassword) {
            return res.status(401).json({
                "success": false,
                message: "email or password not correct"
            })
        }
        const AccessToken = await user.generateAccessToken();
        const RefreshToken = await user.generateRefreshToken();
        console.log(user)
        //  user.accessToken=AccessToken
        user.refreshToken = RefreshToken;
        //  $2b$10$Nr8nhNAAft4zX/eKFcEbq.AcLwlFsHND8wHq.X1rjPRxVO2CO5X4q
        //$2b$10$GiluqGo9e1qRgAPL/OUWR.BUquIjTw4K8CEqrZQV84EDooXlQBzTm
        console.log(await user.save({ validateBeforeSave: false }))



        const newUser = await User.findOne({ phonenumber }).select(" -refreshToken")
        console.log(newUser)
        res.status(200).
            cookie("Acesstoken", AccessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'None'
            })
            .cookie("Refreshtoken", RefreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'None'
            })
            .json({
                success: true,
                newUser
            })
    }
    catch (err) {
        console.log(err)
    }

}

const logoutUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(
            req.user._id,
            {
                $set: {
                    refreshToken: undefined
                }
            },
            {
                new: true
            })
            res.status(200).json({
                success:"true"
            })
    }
    catch (err) {
        console.log(err)
    }
}

const BookClass=async(req,res,next)=>{
    try{
      const id=req.user._id;
      console.log(req.body);
      const data=req.body;
       const newuser=await Book.create({
        id:req.body.id,
        time:req.body.time,
        date:req.body.date,
        userid:req.user._id
       });
       console.log(newuser);
       res.status(200).json({
        sucess:"true",
        message:"Yoga class sucessfully booked"
       })
    }
    catch(err){
        console.log(err);
    }
}

// const getAll=async(req,res,next)=>{
//     try{
//           const userid=req.body._id;
//           const datas=await Book.find().populate("userid");
//           console.log(datas);
//     }
//     catch(err){
//         console.log(err)
//     }
// }


export { registerUser, Loginuser,logoutUser,BookClass,getAll }




