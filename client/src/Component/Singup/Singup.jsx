import { useState } from "react";
import { counry } from "../../../public/Countrycode"
import axios from "axios";
const Singup = ({setsignupfun}) => {

  const [Code,setCode]=useState(counry[0].dial_code);
  const [number,setnumber]=useState(Code);
  const[name,setname]=useState("")
  const[email,setemailID]=useState("")
  const[password,setpassword]=useState("")

  const handleClick=(e)=>{
       setCode(e.target.value);
       setnumber(e.target.value)

  }

  const handleotp=async(e)=>{
      e.preventDefault();
      const res =await axios.post("http://localhost:3000/api/v1/user/register",{phonenumber:number,name,email,password},{
        withCredentials: true    // IMPORTANT!!!
    });
      if(res.success){
        setsignupfun(false);
      }
      console.log(res)
  }

  
  return (
    <>
      <div className="flex my-[10px]">
        <div><select onChange={handleClick} className="border-[2px] border-black border-r-0 h-[40px] rounded-l-md ml-[-1px] focus:outline-none">
          {counry.map((country,ind)=>(     
            <option key={ind}  value={country.dial_code}>{country.code} {country.dial_code}</option>
          ))}
        </select></div>
        <input className="border-[2px] border-black rounded-r-md focus:outline-none" value={number} onChange={(e)=>setnumber(e.target.value)}/>
    </div>
    <div className="relative">
    <label className="absolute top-[11px] left-4 bg-white">Name*</label><br/>
    <input className="border-[2px] h-[40px] w-[280px] border-black rounded-md focus:outline-none pl-2" value={name} onChange={(e)=>setname(e.target.value)}/>
    </div>
    <div className="relative">
    <label className="absolute top-[11px] left-4 bg-white">Eamil ID*</label><br/>
    <input className="border-[2px] h-[40px] w-[280px] border-black rounded-md focus:outline-none pl-2" value={email} onChange={(e)=>setemailID(e.target.value)}/>
    </div>
    <div className="relative">
    <label className="absolute top-[11px] left-4 bg-white">Password*</label><br/>
    <input className="border-[2px] h-[40px] w-[280px] border-black rounded-md focus:outline-none pl-2" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    </div>
    <div className="flex gap-1 items-center my-[20px]">
      <input type="checkbox"  className="h-[16px] checked:bg-orange-600" />
      <label className="text-[16px]">Receive Whatsapp messages</label>
    </div>
    <div className="flex justify-end">
    <button className="border-[2px] w-[100px] rounded-md h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500 " onClick={handleotp}>Send otp</button>
    </div>
    <div className="flex">
      <h1>Already have an account?</h1>
      <button className="text-orange-600 hover:underline" onClick={()=>setsignupfun(false)}>Login</button>
    </div>
    </>
  )
}

export default Singup