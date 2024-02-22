import axios from "axios";
import { useEffect, useState } from "react";
import YogaBox from "./YogaBox";

export const Yoga = () => {
  
    const[data,setdata]=useState();
    useEffect(()=>{
             (async()=>{
                const res=await axios.get("http://localhost:3000/api/v1/yoga/")
                console.log(res);
                setdata(res.data.newdata)
             })()
    },[])
    console.log(data)
    
  return (
    <div>
    Yoga
    <div className="flex  gap-2 overflow-x-auto ">
    {  
       data?.map((item,ind)=>(
        <div key={ind}>
         <YogaBox key={ind} yogadata={item}/>
         </div>
       ))  
    }
    </div>
    </div>
  )
}
