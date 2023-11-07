const Userschema=require("../Model/Schema")


const updateuser=async(req,res,next)=>{
    const{id}=req.params
    try{
        const update=await Userschema.findByIdAndUpdate(id)
        res.status(200).json({sucess:"true",update})   
    }
    catch(err){
        next(err)

    }
}

module.exports={updateuser}