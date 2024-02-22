import { useState } from "react"
import axios from "axios"

export const Filter = ({setData}) => {
    const [level, setlevel] = useState(false)
    const [price, setprice] = useState(false)
    const [healthcondition, sethealthcondition] = useState(false)

    

    const handlelevel = () => {
        setlevel(!level)
        setprice(false)
        sethealthcondition(false);
    }

    const handleprice = () => {
        setlevel(false)
        setprice(!price)
        sethealthcondition(false);
    }
    
    const handlehelath = () => {
        setlevel(false)
        setprice(false)
        sethealthcondition(!healthcondition);
    }

    const handleClick=async(e)=>{
        console.log(e.target.value)

        const res=await axios.get(`http://localhost:3000/api/v1/yoga/filter?level=${e.target.value}`)
        console.log(res)
        console.log(res.data.filterdata)
        setData(res.data.filterdata)

    }

    const handleclickprice=async(e)=>{
        console.log(e.target.value)

        const res=await axios.get(`http://localhost:3000/api/v1/yoga/filter?price=${e.target.value}`)
        console.log(res)
        console.log(res.data.filterdata)
        setData(res.data.filterdata)

    }


    const handleclickhealth=async(e)=>{
        console.log(e.target.value)

        const res=await axios.get(`http://localhost:3000/api/v1/yoga/filter?health=${e.target.value}`)
        console.log(res)
        console.log(res.data.filterdata)
        setData(res.data.filterdata)

    }


    return (
        <div className="border-[2px] border-white hidden  sm:w-[200px] gap-2 sm:flex sm:flex-col text-start rounded-md bg-white p-[4px] ">
            <div className="border-[2px] border-white p-[2px] rounded-md bg-yellow-300">
                <button onClick={handlelevel} className="text-[18px] font-bold border-[1px] border-none w-full rounded-md my-1 bg-yellow-300 text-white">Level</button>
                {level && <div className="flex flex-col text-start gap-2 p-1">
                    <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleClick} value='Beginner'>Beginner</button>
                    <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleClick} value='intermediate'>Intermediate</button>
                    <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleClick} value='advanced'>Advanced</button>
                </div>}
            </div>
            <div className="border-[2px] border-white p-[2px] rounded-md bg-yellow-300">
                <button onClick={handleprice} className="text-[18px] font-bold border-[1px] border-none w-full rounded-md my-1 bg-yellow-300 text-white">Price</button>
                {price && <div className="flex flex-col gap-2 p-1">
                    <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickprice} value='1000'>1000 to 2000</button>
                    <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickprice} value='1000'>2000 to 3000</button>
                    <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickprice} value='2000'> {'<'}1000</button>
                    <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickprice} value='3000'> {'>'}3000 </button>
                </div>}
            </div>
            <div className="border-[2px] border-white p-[2px] rounded-md bg-yellow-300">
                <button onClick={handlehelath}className="text-[18px] font-bold border-[1px] border-none w-full rounded-md my-1 bg-yellow-300 text-white"> Health Condition</button>
                {
                    healthcondition &&
                    <div className="flex flex-col justify-start gap-2 p-1">
                        <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickhealth} value="PCOS">PCOS</button>
                        <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickhealth} value="Pregnancy" >Pregnancy</button>
                        <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickhealth} value="Diabetes">Diabetes</button>
                        {/* <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickhealth} value="PCOS">PCOS</button> */}
                        <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickhealth} value="Blood Pressure">Blood Pressure</button>
                        <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickhealth} value="Back Pain">Back Pain</button>
                        <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickhealth} value="Hypertension">Hypertension</button>
                        <button className="text-[15px]  border-[1px] border-yellow-400 w-full rounded-md bg-white" onClick={handleclickhealth} value="Arthritis">Arthritis</button>
                    </div>
                }
            </div>
        </div>
    )
}
