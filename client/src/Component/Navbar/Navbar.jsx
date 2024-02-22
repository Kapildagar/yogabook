import { useState } from "react"
import { Login } from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUser } from "../../Redux/ReduxSlice/UserSlice";
import axios from "axios";
import { persistor } from "../../Redux/Store";


const Navbar = () => {
    const [login,setlogin]=useState(false);
    const {user}=useSelector((state)=>state.user);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    console.log(user)
    console.log(login);

    const handlelogout=async(e)=>{
      try{
        e.preventDefault();
        setLoading(true)
        console.log("working")
       const res=await axios.post(`http://localhost:3000/api/v1/user/logout`,{},{
        withCredentials: true,    // IMPORTANT!!!
      })
      console.log(res);
      if(res?.data?.success){
        dispatch(setLoading(false));
        dispatch(setError(false));
        await persistor.purge();           
        dispatch(setUser(null));
      }
    }
    catch(err){
        console.log(err)
        console.log("going into the error")
        dispatch(setLoading(false));
        dispatch(setError(true));
        navigate("/");
    }
      
    }
  return (
    <div className="flex justify-between my-2">
        <Link to="/"><h1 className="text-[20px] font-bold">Your Logo</h1></Link>
        <div className="flex gap-4">
       <Link to="/explore"><button className="border-[2px] w-[100px] rounded-md h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500">Explore</button></Link> 
       {user?<button onClick={handlelogout} className="text-orange-600 hover:underline font-bold text-[20px]">Logout</button>:
       <button onClick={()=>setlogin(!login)} className="text-orange-600 hover:underline font-bold text-[20px]">Login</button>
       }
        {login&&<Login loginfun={setlogin}/>}
        </div>
    </div>
   
  )
}

export default Navbar