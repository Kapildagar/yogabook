import { useState } from "react"
import { counry } from "../../../public/Countrycode"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/ReduxSlice/UserSlice";




export const LoginButton = ({ setsignupfun }) => {

  const dispatch=useDispatch();
  const [Code, setCode] = useState(counry[0].dial_code);
  const [number, setnumber] = useState(Code);
   const[password,setpassword]=useState();
  const handleClick = (e) => {
    setCode(e.target.value);
    setnumber(e.target.value)
  }

  const handleotp=async(e)=>{
         e.preventDefault();
         const res=await axios.post("http://localhost:3000/api/v1/user/login",{phonenumber:number,password},{
          withCredentials: true    // IMPORTANT!!!
      })
         console.log(res)
         if(res.data.success){
                dispatch(setUser(res.data.newUser));
         }

  }


  return (
    <>
      <div className="flex my-[20px]">
        <div><select onChange={handleClick} className="border-[2px] border-black border-r-0 h-[40px] rounded-l-md ml-[-1px] focus:outline-none">
          {counry.map((country, ind) => (
            <option key={ind} value={country.dial_code}>{country.code} {country.dial_code}</option>
          ))}
        </select></div>
        <input className="border-[2px] border-black rounded-r-md focus:outline-none" value={number} onChange={(e) => setnumber(e.target.value)} />
      </div>
      <div className="relative">
          <label className="absolute top-[11px] left-4 bg-white">Password*</label><br />
          <input className="border-[2px] h-[40px] w-[280px] border-black rounded-md focus:outline-none pl-2" value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>
      <div className="flex justify-end my-[20px]">
        <button className="border-[2px] w-[100px] rounded-md h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500 " onClick={handleotp}>Send otp</button>
      </div>
      <div className="flex">
        <h1>Don't have an account yet?  </h1>
        <button className="text-orange-600 hover:underline" onClick={() => setsignupfun(true)}>Signup</button>
      </div>
    </>
  )
}

