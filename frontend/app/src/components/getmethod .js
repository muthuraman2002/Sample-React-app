import axios from "axios";
import React from "react";
import { useState,useEffect } from "react"; 
import "./App.css"
// const id="6544859d0b80bedb40e25bc"
const baseURL = `http://localhost:4000/subdir/65488980b5f976df8166083e`;

export default function Getmethod() {
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
 console.log(post)

//   if (!post) return null;

  return (
    <div className="getmethod">
        <h1>Details</h1>
        {/* <p>{post}</p> */}
        <p>Name : {post.Name}</p>  
        <p>Class : {post.Class}</p>
        <p>Passed out Year : {post.Year}</p>
        <p>Id_Number : {post.IdNumber}</p>
        <p>E-Mail : {post.Email}</p>
        <p>Phone : {post.Phone}</p> 
  

   
      
    </div>
  );
}