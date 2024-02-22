import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

export const SingleData = () => {
  const param = useParams();
  const id = param?.id;
  // console.log(id);

  const [data, setdata] = useState()
  const days = data?.repeat_value?.split(',')
  console.log(data?.repeat_value?.split(','))
  console.log(data?.repeat_value)
  // console.log(data.images[0].file)
  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:3000/api/v1/yoga/${id}`);
      console.log(res)
      setdata(res.data.Singledata[0])
    })()
  }, [id])

  return (
    <>
      <div className="flex flex-col   sm:flex sm:flex-row sm:justify-center ">
        <div>
          <img src={data?.images[0]?.file} className="sm:w-[400px] h-[400px] rounded-md" alt="yoga image" />
        </div>
        <div className="w-[250px] text-start bg-white flex gap-2 flex-col p-2 rounded-md mx-auto">
          <h1 className="text-[20px] font-bold">
            {data?.title}
          </h1>
          <h1 >
            <span className="text-gray-400">STYLE:</span><h1>{data?.style}</h1>
          </h1>
          <h1 className="flex flex-wrap">
            <span className="text-gray-400">DATE:</span><h1 className="flex flex-wrap">{days?.map((item, ind) => <span key={ind}>{item+","}</span>)}</h1>
          </h1>
          <h1 >
            <span className="text-gray-400">TIME:</span>
            <h1>
              {data?.start_time} am <span>({data?.duration})</span>
            </h1>
          </h1>
          <h1 >
            <span className="text-gray-400">FEE:</span>
            <h1>
              {data?.period_currency_fee.fee}
            </h1>
          </h1>
          <div className="flex justify-center">
          <button className="flex justify-center items-center border-[2px] w-[200px] rounded-md h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500">Book trial at 50</button>
          </div>
          <div className="flex justify-center">
          <button className="border-[2px] w-[200px] rounded-md h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500">Book trial at 1950</button>
          </div>
          <div className="flex justify-center mb-2">
          <button className=" p-2 border-[2px] w-[200px] rounded-md h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500">join 3 Months at 15% off</button>
          </div>
        </div>
      </div>
      <div className="bg-white my-[10px] w-[300px] mx-auto rounded-md p-1">
        <h1 className="text-[20px] font-bold">Teacher Info</h1>
        <div className="flex justify-center my-[10px] ">
          <img src={data?.teacher?.profile_picture} className="w-[150px] h-[150px] rounded-full"/>
        </div>
        <div className="flex flex-col gap-1">
          <h1>{data?.teacher?.full_name}</h1>
          <h1 className="flex  justify-center items-center gap-1"> <CiLocationOn />{data?.teacher?.location}</h1>
          <h1 className="flex  justify-center items-center gap-1"><CiCalendarDate />{data?.teacher?.practicing_years} years</h1>
          <h1 className="flex w-[150px] justify-center items-center mx-auto text-gray-400">{data?.teacher?.style}</h1>
        </div>
      </div>
    </>
  )
}
