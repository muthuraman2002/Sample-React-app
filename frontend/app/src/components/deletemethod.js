import axios from "axios";
import { useState } from "react";
import "./App.css"



function Simple(){
    const  [id,setid]=useState();
    async function change(e){
       
     await  axios.delete(`http://localhost:4000/subdir/delection/${id}`).then(
        (res)=>{console.log(res)
            console.log(res.data)}
        ).catch(
            (err)=>{console.log(err.message)}
            )
         
    }
    



    return(
        <div onClick={change} className="app">
            <label>Delete ID : <input type="text" value={id}  onChange={(e)=>{setid(e.target.value)}}/></label>
            <input type="submit" value="submit"/>
        </div>
    )
}


export default Simple;