import mongoose from "mongoose";


// for validate the otp
// const userSchemma=new mongoose.Schema({
//     phonenumber:{
//         type:Number,
//         unique:true,
//         required:true
//     },
//     email:{
//         type:String,
//         unique:true,
//         required:true
//     },
//     name:{
//         type:String,
//         unique:true,
//         required:true
//     },
//     otp:{
//      type:Number
//     }
 
// })


// const User=mongoose.model("user",userSchemma);
// export default User;

import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter the name"]
    },
    phonenumber: {
        type: Number,
        required: [true, "Enter the name"],
        unique:true
    },
    email: {
        type: String,
        required: [true, "Enter the Email"],
        unique: [true, "Email already exist"]
    },
    password: {
        type: String,
        required: [true, "Enter the Password"]
    }, 
    refreshToken: {
        type: String
    },
    accessToken: {
        type: String
    },
    // Book:[
    //     {
    //        id:{
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:Book
    //        }
    //     }
    // ]

    
}, {
    timestamps: true
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password"))return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name,
            phonenumber: this.phonenumber
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    console.log(process.env.REFRESH_TOKEN_SECRET)
      return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
    console.log(data)
}
const User = mongoose.model("User", userSchema);


export default User;