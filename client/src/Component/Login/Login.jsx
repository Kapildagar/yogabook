import { useState } from "react"
import { LoginButton } from "../LoginButton/LoginButton";
import Singup from "../Singup/Singup";


export const Login = ({ loginfun }) => {

  const [signup, setsignup] = useState(true);
  return (
    <div className="w-screen h-screen bottom-0 left-0  sm:h-[100vh] sm:[400px] absolute sm:top-0 sm:left-0 z-10   bg-gray-200/90 sm:p-[50px] " onClick={() => loginfun(false)}>
      <div className="sm:w-[600px] sm:h-[500px] w-[300px] mx-auto flex    my-auto justify-center  bg-white rounded-md" onClick={(e) => e.stopPropagation()}>
        <div className="mt-[150px] hidden sm:block">
          <img src="https://as1.ftcdn.net/v2/jpg/05/45/76/34/1000_F_545763456_hUaKjHanCaGdpfNMoEdT0SSiQMUAYH5e.jpg" className="w-[200px] h-[200px]" />
        </div>
        
        <div>
          <div className="flex gap-2 flex-col my-[20px] ">
            <div className="flex gap-4 items-center">
              <div>
                <button onClick={() => setsignup(false)} className="text-[16px] font-bold text-orange-600 ">Login</button>
                {!signup && <div className="w-[15px] h-[4px] border-[1px] border-orange-900 bg-orange-900 rounded-md"></div>}
              </div>
              <div>
                <button onClick={() => setsignup(true)} className="text-[16px] font-bold text-orange-600 ">SignUp</button>
                {signup && <div className="w-[15px] h-[4px] border-[1px] border-orange-900 bg-orange-900 rounded-md"></div>}
              </div>
            </div>
            {signup ? <Singup setsignupfun={setsignup} /> : <LoginButton setsignupfun={setsignup} />}

          </div>
        </div>
      </div>
    </div>
  )
}
