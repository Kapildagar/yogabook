
import { useEffect } from "react";
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";

const Protected = ({children}) => {
    
    const {user}=useSelector((state)=>state.user);
    const navigate=useNavigate();
    console.log(user)

    useEffect(()=>{
        if(!user){
             navigate('/login');
        }
    },[user,navigate])

    return children

}

export default Protected