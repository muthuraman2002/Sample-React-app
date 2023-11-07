import { useState } from "react";
import  "./App.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";


// import App from "./getmethod ";
// import Myform from './sample';




export default function Postmethod(){
  const[name,setname]=useState("")
  const[degree,setdegree]=useState("")
  const[year,setyear]=useState()
  const[id,setid]=useState()
  const[mail,setmail]=useState("")
  const[phone,setphone]=useState("")
  const navicate=useNavigate()
  async function formsubmit(e){
    e.preventDefault()

    const postingdata=await axios.post("http://localhost:4000/subdir/posting",{
      Name:name,
      Class:degree,
      Year:year,
      IdNumber:id,
      Email:mail,
      Phone:phone
    })
    console.log(postingdata);
    setname('')
    setdegree('')
    setid(0)
    setyear(0)
    setmail('')
    setphone(0)
    navicate('/')

    
  
  }
  

  return(
  <div  className="signup">
    <form  onSubmit={formsubmit}  >  
        <label><h1>SignUp</h1></label>
        <label> Name : <input type="text" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}/></label><br/>

        <label> Degree : <input type="text" placeholder="Degree" value={degree} onChange={(e)=>{setdegree(e.target.value)}}/></label><br/>

        <label>  Passed Out Year : <input type="Number" placeholder="Year" value={year} onChange={(e)=>{setyear(e.target.value)}}/></label><br/>

        <label> Id-Number : <input type="number" placeholder="Id_Number" value={id} onChange={(e)=>{setid(e.target.value)}}/></label><br/>

        <label> E-mail : <input type="text" placeholder="E_mail" value={mail} onChange={(e)=>{setmail(e.target.value)}}/></label><br/>

        <label> Phone : <input type="number" placeholder="Phone" value={phone} onChange={(e)=>{setphone(e.target.value)}}/></label><br/>
        <input type="submit"  value="submit"/>

  </form>
  {/* <button  onClick={datageting}>click here..</button> */}
  <div>
        {/* <h1>YourDetails</h1> */}
  </div>
</div>

  )
}