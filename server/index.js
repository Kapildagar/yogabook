import  express  from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.routes.js";
import dotenv from "dotenv"
import yogaRoute from "./routes/yoga.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app=express();
dotenv.config();


app.use(cors({origin:'http://localhost:5173',
methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
credentials: true,
optionsSuccessStatus: 204,}));
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/user",userRoute);
app.use("/api/v1/yoga",yogaRoute);

const mongoConn=async()=>{
    try{
       await mongoose.connect("mongodb://localhost:27017/yoga");
       console.log("connected to the dataBase");
    }
    catch(err){
        console.log(err);
    }
}



app.listen(process.env.PORT||5000,async()=>{
    await mongoConn();
     console.log(`server is running the port 3000`)
})



console.log("working");