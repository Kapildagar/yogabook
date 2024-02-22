import { CiSearch } from "react-icons/ci";

const Serach = () => {
  return (
    <div className="flex justify-center items-center">
        <input type="text" className="w-[300px] h-[40px] border-[2px]  rounded-l-[20px] border-orange-500 focus:outline-none pl-[10px] py-[5px]"/>
        <button className=" h-[40px] w-[40px] bg-white border-[2px] border-l-0  rounded-r-[20px] border-orange-500  "><CiSearch className="text-orange-500 text-[30px]"/></button>
    </div>
  )
}

export default Serach