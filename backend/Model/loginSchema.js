const mongoose=require("mongoose")

Dbconnect().catch(err=>console.log(err.message))

async function Dbconnect(){
    await mongoose.connect("mongodb://localhost/appdb",{
        useNewUrlParser: true,
        // useUnifiedTopology: true,
        // UseFindAndModify:false
    })
}


const logschema=new mongoose.Schema(
    {
        Email:String,
        Password:String
       
    }
)

const logschemamodel=mongoose.model("login",logschema)

module.exports=logschemamodel;