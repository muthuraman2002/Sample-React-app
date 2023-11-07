import axios from "axios";
import { useState } from "react";
import './App.css'
import { useNavigate } from "react-router-dom";

export default function Simple(){
   const navicate=useNavigate()
   const[_id,set_id]=useState()
    const [name,setname]=useState("")
    const[degree,setdegree]=useState("")
    const[year,setyear]=useState()
    const[id,setid]=useState()
    const[mail,setmail]=useState("")
    const[phone,setphone]=useState("")
    
    async function updater(e){
        e.preventDefault();
        // const id="654485e20b80bedb40e25bd0"
       await axios.put(`http://localhost:4000/subdir/updating/${_id}`,{Name:name,Class:degree,Year:year,IdNumber:id,Email:mail,Phone:phone})
       .then(
        (response)=>{console.log(response)})
        .catch((err)=>
        console.log(err.message
            ))
    //    console.log(current)
    //    console.log(data)
    navicate("/")
    
    }

    return(
        <form className="update" onSubmit={updater}>
            <h1>Update</h1>
            <label>Id : <input type="text" value={_id} onChange={(e)=>{set_id(e.target.value)}}/></label><br/>
            <label>Name : <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/></label><br/>
            <label>Drgree : <input type="text" value={degree} onChange={(e)=>{setdegree(e.target.value)}}/></label><br/>
            <label>PassedOut Year : <input type="number" value={year} onChange={(e)=>{setyear(e.target.value)}}/></label><br/>
            <label>Id-Number : <input type="number" value={id} onChange={(e)=>{setid(e.target.value)}}/></label><br/>
            <label>Email  : <input type="text" value={mail} onChange={(e)=>{setmail(e.target.value)}}/></label><br/>
            <label>Phone : <input type="number" value={phone} onChange={(e)=>{setphone(e.target.value)}}/></label><br/>
            <input className="button" type="submit" value="submited"/>
        </form>
    )
}


