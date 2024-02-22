import { Link } from "react-router-dom";

const YogaBox = ({ yogadata }) => {
    const title = yogadata?.title?.slice(0, 30);
    const days = yogadata?.repeat_value?.split(',')
    console.log(days)
    return (
        <Link to={`/${yogadata?.id}`}>
            <div className="border-[2px] border-white w-[300px] h-[250px] gap-4 flex flex-col p-[10px] rounded-md bg-white">
                <div className="flex justify-between">
                    <div className="text-start  ">
                        <h1 className="my-[2px]">{title}</h1>
                        <h1 className="my-[2px]">{yogadata?.level}</h1>
                        <h1 className="my-[2px]">{yogadata?.teacher?.full_name}</h1>
                    </div>
                    <div className=""><img className="w-[120px] h-[100px] rounded-md" src={yogadata?.images[0].file} alt="yoga img" /></div>
                </div>
                <div className="flex justify-between ">
                    <div>
                        <h1>{days && (days[0])}</h1>
                    </div>
                    <div>
                        <h1>rating</h1>
                        <h1>streams</h1>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col text-start">
                        <div className="flex gap-2">
                            <h1>{yogadata?.start_time}am</h1>
                            <h1>{yogadata?.duration}</h1>
                        </div>
                        <h1>{yogadata?.period_currency_fee?.fee}/month</h1>
                    </div>
                    <button className="border-[2px] w-[100px] rounded-md h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500">Join</button>
                </div>
            </div>
        </Link>
    )
}

export default YogaBox