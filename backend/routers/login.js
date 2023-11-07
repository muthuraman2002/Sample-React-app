const Schema=require("../Model/loginSchema")
const express=require("express")
const router=express.Router()


router.post("/login",(req,res)=>{

    const data=Object.assign(req.body)
    Schema.create(data)
    res.status(201).send("sucess")

})
router.put("/:id",async(req,res,next)=>{
    const {id} =req.params
    // const data=req.body
    try{
        update=await Schema.findByIdAndUpdate({_id:id},{...req.body})
        res.status(200).send({sucess:true})
    }
    catch(err){
        next(err)
    }
})
module.exports =router;