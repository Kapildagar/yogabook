import axios from "axios";
import { useEffect, useState } from "react";
import YogaBox from "../Yoga/YogaBox";
import { Page } from "./Page";
import { Filter } from "./Filter";


export const Explore = () => {


    const [data, setdata] = useState();
    const [page, setpage] = useState(1);
    //    const totalpage=Math.ceil(data?.length/6);
    //    console.log(totalpage);
    const startindex = (page - 1) * 6;
    const endindex = startindex + 6;
    const pagedata = data?.slice(startindex, endindex)
    console.log(pagedata)
    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:3000/api/v1/yoga/")
            console.log(res);
            setdata(res.data.newdata)
        })()
    }, [])
    console.log(data)

    return (
        <>
           {/* <h1>Yoga</h1> */}
            <div className="flex relative">
                <div><Filter setData={setdata}/></div>
                <div className="mx-auto w-fit">

                <div className="flex  gap-2 flex-wrap justify-evenly w-fit mx-auto">
                    {
                        pagedata?.length?pagedata.map((item, ind) => (
                            <div key={ind}>
                                <YogaBox key={ind} yogadata={item} />
                            </div>
                        )):(<div className="mx-auto w-fit">
                            <h1>No Data Availability</h1>
                        </div>)
                        
                    }
                </div>
                {
                   pagedata?.length&&
                   <div>
                   <Page currentPage={page} handlePage={setpage} lastindex={endindex} totalitems={data?.length} />
                   </div>
                }
                </div>
            </div>
        </>
    )
}
