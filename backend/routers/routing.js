const express=require("express")
const Schema=require("../Model/Schema")
const router= express.Router()
// const updateuser=require("../middleware/usercontroller")
const loginSchema=require("../Model/loginSchema")
// const value=require("./login")



//  /subdir/
router.get("/",(req,res)=>{
    Schema.find().then((result)=>{
        res.send(result)
    }).catch(err=>console.log(err.message))

   

})

//  subdir/:id
router.get("/:id",(req,res)=>{
    const id=req.params.id
    Schema.findById({_id:id}).then((result)=>{
        res.send(result)
    }).catch(err=>console.log(err.message))

   

})

// /subdir/posting

router.post("/posting",(req,res)=>{

    const data=Object.assign(req.body)
    Schema.create(data)
    res.status(201).send("sucess")

})

//  /subdir/updating/:id

router.put("/updating/:id",async(req,res,next)=>{
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

// router.put("/update/:id",updateuser)

router.delete("/delection/:id",async(req,res,next)=>{
    const data=req.params.id
    try{
        const x=await Schema.findOneAndDelete({_id:data})
        res.status(204).json({sucess:true})
    }
    catch(err){
        // console.log(err.message)
        next()
    }
    
})

//  /subdir/login/

router.post("/login",(req,res)=>{
    const data=Object.assign(req.body)
    loginSchema.create(data)
    res.status(201).send("sucess")
})

// /subdir/login/

router.get("/login/",(req,res)=>{
    loginSchema.find().then((result)=>{
        res.send(result) 
    }).catch(err=>console.log(err.message))

})
router.get("login/:id",(req,res)=>{
    const id=req.params.id
    Schema.findById({_id:id}).then((result)=>{
        res.send(result)
    }).catch(err=>console.log(err.message))  

})

// router.post("/log",value)
// router.put("/login/update",value)
router.put("/login/update/:id",async(req,res,next)=>{
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
module.exports=router;