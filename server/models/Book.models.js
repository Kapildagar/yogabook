import mongoose from "mongoose";
import User from "./User.models.js";


const BookSchemma=new mongoose.Schema({

    id:{
        type:Number,
        required:true
    },
    time:{
        type:String,
    },
    date:{
        type:Date
    },
    userid:
        {
          type:mongoose.Schema.Types.ObjectId,
           ref:User
        }
    
})

const Book=mongoose.model("Book",BookSchemma);

export default Book;