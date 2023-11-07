
import {  useState } from "react";



function Myform(){
    const[password,setpassword]=useState('')
    const [mail,setmail]=useState("")
   



    function formsubmit(e){
        e.preventDefault();
        console.log("form submited")
        console.log("Email: ",mail)
        console.log("Password : ",password)

    }



    return  <form  onSubmit={formsubmit} >   
    
                <label> E-mail:<input type="text" placeholder="E-Mail" onChange={(e)=>{setmail(e.target.value)}}/></label><br/>
                <label> Password:<input type="password" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}/></label><br/>
                <input type="submit"  value="Login"/>
            </form>
}
export default Myform;