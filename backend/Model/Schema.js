const mongoose=require("mongoose")

Dbconnect().catch(err=>console.log(err.message))

async function Dbconnect(){
    await mongoose.connect("mongodb://localhost/appdb",{
        //  useNewUrlParser: true,
        //  ustrueeUnifiedTopology: false
        
    })
}


const Userschema=new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true
        },
        Class:{type:String,
            required:true
        },
        Year:{
            type:Number,
            required:true
        },
        IdNumber:{
            type:Number,
            required:true
        },
        Email:{
            type:String,
            required:true
        },
        Phone:{
            type:Number,
            required:true
        }
    }
    
)


const Schemamodel=mongoose.model("User",Userschema)

module.exports=Schemamodel;