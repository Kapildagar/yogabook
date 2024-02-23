import axios from "axios";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";


const Bookyoga = () => {
    const todaydate=new Date();
    
    let month=todaydate.getMonth()+1;
    let tDate=todaydate.getDate();
    if(month<=10){
          month="0"+month;
    }

    if(tDate<=10){
        tDate="0"+Date
    }
    console.log(todaydate.getFullYear()+"-"+month+"-"+todaydate.getDate())
    const [date,setdate]=useState(todaydate.getFullYear()+"-"+month+"-"+tDate);
    const [time,settime]=useState("00:00");
    const param=useParams();
    const navigate=useNavigate();
    console.log(param)
    const id=param.id;
    console.log(id)

    const handleSubmit=async(e)=>{
            e.preventDefault();
            const res=await axios.post("http://localhost:3000/api/v1/user/bookclass",{id,date,time},{
                withCredentials:true
            })
            if(res.data.sucess){
              navigate('/');
            }
            console.log(res);
    }
    
   

   

  return (
   
    <div className="flex flex-col  gap-2 w-[200px] mx-auto">
        <input type="date" className="w-[200px] h-[40px] focus:outline-none border-[2px] border-orange-600 rounded-md px-[2px]" value={date} onChange={(e)=>setdate(e.target.value)}/>
        <input type="time" className="w-[200px] h-[40px] focus:outline-none border-[2px] border-orange-600 rounded-md px-[2px]" value={time} onChange={(e)=>settime(e.target.value)}/>
        <button onClick={handleSubmit} className="w-[200px] h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500 rounded-md"  >Book Yoga Class</button>
    </div>
    
  )
}

export default Bookyoga