import { Router } from "express";
import { Loginuser, logoutUser, registerUser } from "../controller/user.controller.js";
import Auth from "../middleware/Auth.middelware.js";



const userRoute=Router();

userRoute.route('/register').post(registerUser)
userRoute.route("/login").post(Loginuser)
userRoute.route("/logout").post(Auth,logoutUser)




export default userRoute;