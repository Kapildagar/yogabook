import data from "../utilis/data.js";

const yogaData=async(req,res,next)=>{
    try{
        // console.log(data);
        const newdata=data.slice(0,20);
        res.status(200).json({
            newdata
        })
    }
    catch(err){
        console.log(err);
    }
}

const SingleData=async(req,res,next)=>{
    try{
           const id=await req.params.id;
           const newdata=data.slice(0,20);
           const Singledata=newdata.filter((item)=>(item.id==id))
           console.log(Singledata);
           console.log(id)
           res.status(200).json({
            Singledata,
            "sucess":"true"
           })
    }
    catch(err){
        console.log(err)
    }
}

const FilterData=async(req,res,next)=>{
    try{
        // console.log(req.params)
    //   console.log(req.query.level);
      const newdata=data.slice(0,20);
      if(req.query?.level){
        const level=await req.query.level;
        console.log(level)
        const filterdata=newdata.filter((item)=>item.level==level);
        console.log(filterdata)
        res.status(200).json({
            "sucess":"true",
            filterdata
        })
      }
      else if(req.query?.price){
        console.log(req.query.price)
        const filterdata=data.slice(0,10);
        res.status(200).json({
            "sucess":"true",
            filterdata
        })
      }
      else if(req.query?.health){
        const health=req.query.health;
        const filterdata=newdata.filter((item)=>item.description.includes(health));
        res.status(200).json({
            "sucess":"true",
            filterdata
        })
      }

    }
    catch(err){
        
    }
}


export {yogaData,SingleData,FilterData}